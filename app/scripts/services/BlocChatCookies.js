(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('currentChatUser');      
     
      if (!currentUser || currentUser === '') {
      
        $uibModal.open({
          templateUrl: '/templates/username.html',
          controller: 'UsernameCtrl',
          backdrop  : 'static',
          keyboard: false
      })
    }  
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();