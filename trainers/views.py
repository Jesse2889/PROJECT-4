# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Trainer, Like
from .serializers import TrainerSerializer, PopulatedTrainerSerializer, LikeSerializer

class TrainerListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        trainers = Trainer.objects.all()
        serialized_trainers = TrainerSerializer(trainers, many=True)
        return Response(serialized_trainers.data)

    def post(self, request):

        trainer = TrainerSerializer(data=request.data)

        if trainer.is_valid():
            trainer.save()
            return Response(trainer.data, status=HTTP_201_CREATED)

        return Response(trainer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class TrainerDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk):
        try:      
            trainer = Trainer.objects.get(pk=pk)
            serialized_trainer = TrainerSerializer(trainer)
            return Response(serialized_trainer.data)
        except Trainer.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def put(self, request, pk):

        try:
            trainer = Trainer.objects.get(pk=pk)
            updated_trainer = TrainerSerializer(trainer, data=request.data)
            if updated_trainer.is_valid():
                updated_trainer.save()
                return Response(updated_trainer.data, status=HTTP_202_ACCEPTED)
            return Response(updated_trainer.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except Trainer.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def delete(self, _request, pk):

        try:
            trainer = Trainer.objects.get(pk=pk)
            trainer.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Trainer.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
class LikeListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def post(self, request, pk):
        request.data['trainer'] = pk
        request.data['owner'] = request.user.id

        like = LikeSerializer(data=request.data)

        if like.is_valid():
            like.save()
            trainer = Trainer.objects.get(pk=pk)
            serialized_trainer = PopulatedTrainerSerializer(trainer)

            return Response(serialized_trainer.data, status=HTTP_201_CREATED)

        return Response(like.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class LikeDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def delete(self, request, **kwargs):

        try:
            like = Like.objects.get(pk=kwargs['like_pk'])
            if like.owner.id != request.user.id:
                return Response(status=HTTP_401_UNAUTHORIZED)
            like.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except like.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
