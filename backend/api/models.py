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
        # Check if this is a new instance
        creating = self.pk is None
        
        # Save first to get the ID
        if creating:
            super().save(*args, **kwargs)
            
            # Generate slug after saving to have access to pk
            if not self.slug:
                base_slug = slugify(f"{self.name}-{self.type}-{self.location}")
                self.slug = f"{base_slug}-{self.pk}"
                # Update only the slug field to avoid infinite recursion
                super().save(update_fields=['slug'])
        else:
            # For updates, just save normally
            super().save(*args, **kwargs)
    
    def __str__ (self):
        return f"{self.name} ({self.type})"
    

class Reading(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.DO_NOTHING, related_name="readings")
    value = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sensor.name} = {self.value} {self.sensor.unit} at {self.timestamp:%Y-%m-%d %H:%M:%S}"
    