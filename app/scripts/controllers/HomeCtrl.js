(function() {
    function HomeCtrl($scope, $uibModal, Room) {
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
      }
      
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl] );
})();