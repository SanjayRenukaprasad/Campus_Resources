from django.db import models
from resources.models.category import Category
class Resource(models.Model):
    category = models.ForeignKey(Category, related_name='resources', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    link = models.URLField()
    description = models.TextField()
