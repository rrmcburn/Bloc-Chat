(function() {
    function HomeCtrl($scope, Room, Message, $uibModal, $cookies) {
      $scope.rooms = Room.all;
      $scope.activeRoom = null;
      $scope.roomName = null;     
    
      $scope.open = function() {
            var newRoomModal = $uibModal.open({
                templateUrl: '/templates/newRoomModal.html',
                controller: 'ModalCtrl'
            });
          
      newRoomModal.result.then(function (newRoomName) {
                Room.createNewRoom(newRoomName);
            })
     }
      
      $scope.activeRoomSet = function(room) {
          $scope.activeRoom = room;
          $scope.roomName = room.name;
          $scope.userName = $cookies.get('currentChatUser');
          $scope.messages = Message.getByRoomId(room.$id);
      }
      
      $scope.newMessage = function (newMessageText) {
          Message.send(newMessageText, $scope.activeRoom.$id);
          $scope.newMessageText = null;
      }
      
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope',  'Room', 'Message', '$uibModal', '$cookies', HomeCtrl] );
})();