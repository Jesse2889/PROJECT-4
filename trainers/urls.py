from django.urls import path
from .views import TrainerListView, TrainerDetailView, LikeListView, LikeDetailView

urlpatterns = [
    path('', TrainerListView.as_view()),
    path('<int:pk>/', TrainerDetailView.as_view()),
    path('<int:pk>/likes/', LikeListView.as_view()),
    path('<int:pk>/comments/<int:comment_pk>/', LikeDetailView.as_view())
]
