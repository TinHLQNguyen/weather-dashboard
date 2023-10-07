from django.urls import path
from . import views

# setting application namespace
app_name = "polls"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("question/<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    # ex: /polls/5/vote/
    path("<int:question_id>/vote/", views.vote, name="vote"),
]