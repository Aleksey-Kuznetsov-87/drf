from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = [
            'username',
            'email',
            'firstname',
            'lastname',
            ]


class UserSerializerWithFullName(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = (
            'username',
            'email',
            'firstname',
            'lastname',
        )


class UserSerializerWithFullNameNew(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = (
            'username',
            'email',
            'firstname',
            'lastname',
            'is_superuser',
            'is_staff',
        )
