from rest_framework import serializers
from django.contrib.auth.models import User

class SnippetSerializer(serializers.ModelSerializer):
    teste = 'aaaaaaaaaa'
    class Meta:
        model = User
        fields = ('id', 'first_name')
        