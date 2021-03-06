"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from footerapp.views import FooterViewSet
from mainapp.views import AuthorModelViewSet, BookModelViewSet, BiographyModelViewSet, ArticleModelViewSet
from menuapp.views import MenuViewSet
from todoapp.views import TODOModelViewSet, ProjectLimitPaginatonViewSet, ProjectModelViewSet, \
    ToDoLimitPaginatonListCreate
from usersapp.views import UserViewSet, UsersList, UserDetail

router = DefaultRouter()
router.register('authors', AuthorModelViewSet)
router.register('books', BookModelViewSet)
router.register('biography', BiographyModelViewSet)
router.register('article', ArticleModelViewSet)

router.register('users', UserViewSet)
router.register('footers', FooterViewSet)
router.register('menus', MenuViewSet)
router.register('project', ProjectLimitPaginatonViewSet)
router.register('todo', TODOModelViewSet)

# фильтры
filter_router = DefaultRouter()
filter_router.register('project', ProjectModelViewSet, basename='project')
filter_router.register('todo', TODOModelViewSet, basename='todos')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('filters/', include(filter_router.urls)),
    path('users/', UsersList.as_view()),
    path('user/<int:pk>/', UserDetail.as_view()),
    path('todo/', ToDoLimitPaginatonListCreate.as_view()),
    path('todo/<int:pk>/', TODOModelViewSet.as_view({'get': 'list'})),
]
