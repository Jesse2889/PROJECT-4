from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
User = get_user_model()


class Trainer(models.Model):
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=5)
    image = models.CharField(max_length=300)
    description = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.name}'

class Like(models.Model):
  like = models.IntegerField(default=0)
  owner = models.ForeignKey(User, related_name='likes', null=True, on_delete=models.CASCADE)
  trainer = models.ForeignKey(Trainer, related_name="likes", null=True, on_delete=models.CASCADE)
  def __str__(self):
    return f'Like by {self.owner} on {self.trainer}'
