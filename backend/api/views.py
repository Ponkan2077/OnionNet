# For CRUS operations
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Sensor, Reading
from .serializers import SensorSerializer, ReadingSerializer


class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer

    def create(self, request, *args, **kwargs):
        print("📥 Incoming request.data:", request.data)  # log frontend payload
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print("❌ Validation errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ReadingViewSet(viewsets.ModelViewSet):
    queryset = Reading.objects.all()
    serializer_class = ReadingSerializer

# For Input Fields
from rest_framework.views import APIView
from rest_framework.response import Response
from django.apps import apps

class SensorFieldsView(APIView):
    def get(self, request):
        Sensor = apps.get_model( 'api', 'Sensor' )
        fields = []
        exclude_fields = ['id','slug', 'added_at']

        for field in Sensor._meta.get_fields():
            # Skip relational fields and excluded fields
            if field.is_relation or field.name in exclude_fields:
                continue
            
            # Default Input Type mapping
            if field.get_internal_type() in ["CharField", "TextField"]:
                input_type = "text"
            elif field.get_internal_type() in ["BooleanField"]:
                input_type = "checkbox"
            elif field.get_internal_type() in ["DateField", "DateTimeField"]:
                input_type = "date"
            elif field.get_internal_type() in ["IntegerField", "FloatField", "DecimalField"]:
                input_type = "number"
            else:
                input_type = "text"
            
            # Base field data
            field_data = {
                "name" : field.name,
                "label" : field.verbose_name.title(),
                "type" : input_type,
            }

            if field.choices:
                field_data["type"] = "select"
                field_data["options"] = [
                    {"value": val, "label" : label}
                    for val, label in field.choices
                ] 
            
            fields.append(field_data)
        
        return Response(fields)
