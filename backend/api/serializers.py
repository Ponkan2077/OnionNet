from rest_framework import serializers

from .models import Sensor, Reading

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ['id', 'name', 'type', 'location', 'status', 'unit', 'slug', 'added_at']
        read_only_fields = ['slug', 'added_at','id']

    def __str__ (self):
        return f"{self.name} ({self.type})"

class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = ['id', 'sensor', 'value', 'timestamp']
