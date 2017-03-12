(function() {
    function UsernameCtrl($scope, $cookies, $uibModalInstance){
        
        $scope.newUsername = function () {
            $cookies.put('currentChatUser', $scope.usernameText);
            
            if ($scope.usernameText.length > 0) {
                $uibModalInstance.close();
            } else {
                uibModalInstance.dismiss();
            };
    }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', UsernameCtrl])
})();