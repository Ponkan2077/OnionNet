from rest_framework import serializers
from .models import Sensor, Reading

class SensorSerializer(Serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ['id', 'name', 'type', 'location', 'status', 'unit', 'added_at', 'slug']

class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = ['id', 'sensor', 'value', 'timestamp']
