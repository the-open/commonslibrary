# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-16 09:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('directory', '0002_organisation_colour'),
    ]

    operations = [
        migrations.AddField(
            model_name='organisation',
            name='slug',
            field=models.SlugField(null=True, unique=True),
        ),
    ]
