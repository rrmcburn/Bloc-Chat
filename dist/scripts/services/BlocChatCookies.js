(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('currentChatUser');
    if (!currentUser || currentUser === '') {
      
        $uibModal.open({
          templateUrl: '/templates/username.html',
          controller: 'UsernameCtrl'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();