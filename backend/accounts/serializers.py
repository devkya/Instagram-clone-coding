from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()
# print("User :", User)

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'])
        # 암호화
        user.set_password(validated_data['password'])
        user.save()
        return user
        
    class Meta:
        model = User
        # password 암호화
        fields = ["pk", "username", "password"]