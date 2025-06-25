from rest_framework import viewsets
from resources.models import Resource
from resources.serializers.resource import ResourceSerializer
class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ResourceSerializer

    def get_queryset(self):
        category_id = self.request.query_params.get('category_id')
        if category_id:
            return Resource.objects.filter(category_id=category_id)
        return Resource.objects.none()
