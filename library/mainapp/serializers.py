from rest_framework.serializers import HyperlinkedModelSerializer

from .models import Author, Book, Article, Biography


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        # fields = ['first_name']
        fields = '__all__'
        # exclude = ['uid']


class BiographyModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Biography
        fields = '__all__'


class ArticleModelSerializer(HyperlinkedModelSerializer):
    authors = AuthorModelSerializer()

    class Meta:
        model = Article
        fields = '__all__'


class BookModelSerializer(HyperlinkedModelSerializer):
    authors = AuthorModelSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'
