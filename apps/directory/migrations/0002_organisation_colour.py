# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-15 16:05
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('directory', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='organisation',
            name='colour',
            field=colorfield.fields.ColorField(default='#50E3C2', max_length=18),
        ),
    ]
