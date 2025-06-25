from rest_framework import viewsets
from resources.models import Category
from resources.serializers.category import CategorySerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
