from django.http import Http404
from rest_framework import status
from rest_framework.response import Response

from core.abstract.viewsets import AbstractViewSet
from core.auth.permissions import UserPermission
from core.comment.models import Comment
from core.comment.serializers import CommentSerializer


class CommentViewSet(AbstractViewSet):
    http_method_names = ('post', 'get', 'put', 'delete')
    permission_classes = (UserPermission,)
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.filter(post_id=self.kwargs['post_pk'])

    def get_object(self):
        try:
            return Comment.objects.get(post_id=self.kwargs['post_pk'], id=self.kwargs['pk'])
        except Comment.DoesNotExist:
            raise Http404

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(post_id=self.kwargs['post_pk'])
        return Response(serializer.data, status=status.HTTP_201_CREATED)
