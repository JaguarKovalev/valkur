from django.db import models


class Client(models.Model):
    name = models.CharField("Имя", max_length=100, blank=False, null=False)
    email = models.EmailField("Почта", max_length=50, blank=False, null=False)
    phone = models.CharField("Номер телефона", max_length=20, blank=False, null=False)
    description = models.TextField("Запрос", max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = "Клиенты"
