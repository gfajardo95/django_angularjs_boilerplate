from django.contrib import admin
from django.conf.urls import url, include
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import TemplateView

urlpatterns = [
  url(r'admin/', admin.site.urls),
  url(r'^$', ensure_csrf_cookie(TemplateView.as_view(template_name="index.html"))),
]
