from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django_pydenticon.views import image as pydenticon_image

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('instagram.urls')),
    path("identicon/image/<path:data>/", pydenticon_image, name='pydenticon_image'),
]

# MEDIA_URL로 요청이 오면, MEDIA_ROOT에서 찾아서 서빙함
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
    import debug_toolbar
    
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
        path('accounts/', include('accounts.urls')),
        
    ]