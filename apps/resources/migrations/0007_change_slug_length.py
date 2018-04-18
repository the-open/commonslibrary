# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-17 15:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0006_change_resource_title_length'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='slug',
            field=models.SlugField(max_length=140, null=True, unique=True),
        ),
    ]
