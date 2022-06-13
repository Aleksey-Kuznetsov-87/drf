from django.db import models
from uuid import uuid4


class Users(models.Model):
    # id = models.IntegerField(primary_key=True)
    uid = models.UUIDField(primary_key=True, default=uuid4)
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(verbose_name='email', unique=True)
    u_pass = models.CharField(max_length=64)
#    пароль без шифрования, пока так
#    а можно было и абстрактную модель джанги использовать
