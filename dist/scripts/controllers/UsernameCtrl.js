(function() {
    function UsernameCtrl($scope, $cookies, $uibModalInstance){
        
        $scope.newUsername = function () {
            $cookies.put('currentChatUser', $scope.usernameText);
            $uibModalInstance.close();
            }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', UsernameCtrl])
})();