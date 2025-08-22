from django.db import models
from django.utils.text import slugify

class Sensor(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=[('online', 'Online'), ('offline', 'Offline')], default='offline')
    unit = models.CharField(max_length=20)
    added_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length = 100, unique=True, blank=True)

    def save(self, *args, **kwargs):
        creating = self.pk is None

        super().save(*args, **kwargs)

        if creating and not self.slug:
            base = slugify(f"{self.name}-{self.type}-{self.location}")
            self.slug = f"{base}-{self.pk}"
            super().save(update_fields=['slug'])
    
    def __str__ (self):
        return f"{self.name} ({self.type})"
    

class Reading(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.DO_NOTHING, related_name="readings")
    value = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sensor.name} = {self.value} {self.sensor.unit} at {self.timestamp:%Y-%m-%d %H:%M:%S}"
    