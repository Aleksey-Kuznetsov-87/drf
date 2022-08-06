from django.contrib.postgres.functions import RandomUUID
from django.db import models
from uuid import uuid4


class Author(models.Model):
    uid = models.UUIDField(primary_key=True, default=RandomUUID)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField()
#  было - uid = models.UUIDField(primary_key=True, default=uuid4)


class Biography(models.Model):
    text = models.TextField()
    author = models.OneToOneField(Author, on_delete=models.CASCADE)


class Book(models.Model):
    name = models.CharField(max_length=32)
    authors = models.ManyToManyField(Author)


class Article(models.Model):
    name = models.CharField(max_length=32)
    authors = models.ForeignKey(Author, models.PROTECT)
