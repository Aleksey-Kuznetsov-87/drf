from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from .models import Author, Book, Article, Biography


class AuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        # fields = ['first_name']
        fields = '__all__'
        # exclude = ['uid']


class BiographyModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Biography
        fields = '__all__'


class ArticleModelSerializer(ModelSerializer):
    # authors = AuthorModelSerializer()

    class Meta:
        model = Article
        fields = '__all__'


class BookModelSerializer(HyperlinkedModelSerializer):
    authors = AuthorModelSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'


class BookSerializerBase(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
