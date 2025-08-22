from rest_framework import viewsets
from .models import Sensor, Reading
from .serializers import SensorSerializer, ReadingSerializer

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer

class ReadingViewSet(viewset.ModelViewSet):
    queryset = Reading.objects.all()
    serializer_class = ReadingSerializer