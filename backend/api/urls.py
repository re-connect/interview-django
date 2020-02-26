from django.conf.urls import include, url
from django.urls import path
from rest_framework import routers, serializers, viewsets

from . import views
from .models import Beneficiary


# Serializers define the API representation.
class BeneficiarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Beneficiary
        fields = ['name']

# ViewSets define the view behavior.


class BeneficiaryViewSet(viewsets.ModelViewSet):
    queryset = Beneficiary.objects.all()
    serializer_class = BeneficiarySerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'beneficiaries', BeneficiaryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
