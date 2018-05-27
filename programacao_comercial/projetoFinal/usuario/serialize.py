from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.models import User

class SnippetSerializer(serializers.ModelSerializer):
    teste = 'aaaaaaaaaa'
    class Meta:
        model = User
        fields = ('id', 'first_name')

class CadastroSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['password', 'username',
                 'first_name', 'last_name', 'email']
        write_only_fields = ('password',)
        read_only_fields = ('id',)
    