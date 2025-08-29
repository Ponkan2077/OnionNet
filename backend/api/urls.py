from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SensorViewSet, ReadingViewSet, SensorFieldsView

router = DefaultRouter()
router.register(r'sensors', SensorViewSet)
router.register(r'readings', ReadingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sensor-fields/', SensorFieldsView.as_view(), name='sensor-fields'),
    path('sensor-fields/<int:pk>', SensorFieldsView.as_view(), name='sensor-fields-pk'),
]