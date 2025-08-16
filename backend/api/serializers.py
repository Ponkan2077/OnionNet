from rest_framework import serializers
from .models import Item  # assuming your model is called Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'