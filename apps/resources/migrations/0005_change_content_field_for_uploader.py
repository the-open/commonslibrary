# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-06 11:02
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0004_resources_statuses'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
    ]
