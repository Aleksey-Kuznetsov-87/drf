from rest_framework.serializers import HyperlinkedModelSerializer

from mainapp.serializers import AuthorModelSerializer
from .models import Project, TODO


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(HyperlinkedModelSerializer):
    # authors = AuthorModelSerializer(many=True)

    class Meta:
        model = TODO
        fields = '__all__'
