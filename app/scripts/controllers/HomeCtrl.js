(function() {
    function HomeCtrl($scope, $uibModal, Room) {
      $scope.rooms = Room.all;
    
      $scope.open = function() {
            var newRoomModal = $uibModal.open({
                templateUrl: '/templates/newRoomModal.html',
                controller: 'ModalCtrl'
            });
          
      newRoomModal.result.then(function (newRoomName) {
                Room.createNewRoom(newRoomName);
            })
     }
      
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl] );
})();