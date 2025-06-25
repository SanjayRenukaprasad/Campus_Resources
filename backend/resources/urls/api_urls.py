from rest_framework.routers import DefaultRouter
from resources.views.category import CategoryViewSet
from resources.views.resource import ResourceViewSet

router = DefaultRouter()
router.register(r'resources', ResourceViewSet, basename='resource')
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = router.urls  # tells Django what URL patterns to register
