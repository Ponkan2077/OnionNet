from rest_framework import serializers
from .models import Sensor, Reading

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ['id', 'name', 'type', 'location', 'status', 'unit', 'slug', 'added_at']
        read_only_fields = ['slug', 'added_at']

    def save(self, *args, **kwargs):
        creating = self.pk is None

        super().save(*args, **kwargs)

        if creating and not self.slug:
            base = slugify(f"{self.name}-{self.type}-{self.location}")
            self.slug = f"{base}-{self.pk}"
            super().save(update_fields=['slug'])
    
    def __str__ (self):
        return f"{self.name} ({self.type})"

class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = ['id', 'sensor', 'value', 'timestamp']
