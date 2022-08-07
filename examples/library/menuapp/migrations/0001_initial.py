# Generated by Django 4.0.4 on 2022-05-09 19:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menus',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('home', models.CharField(max_length=64)),
                ('contacts', models.CharField(max_length=64)),
                ('service', models.CharField(max_length=64)),
            ],
        ),
    ]
