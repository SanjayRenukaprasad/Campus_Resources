from rest_framework import serializers
from resources.models.resource import Resource

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ['id', 'name', 'link', 'description', 'category']
