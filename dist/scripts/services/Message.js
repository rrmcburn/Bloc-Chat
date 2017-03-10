(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    return {
      getByRoomId: function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }, 
        
      send: function(newMessageText, roomId) {
        return messages.$add({ 
            content: newMessageText,
            roomId: roomId,
            sentAt: firebase.database.ServerValue.TIMESTAMP,
            username: $cookies.get('currentChatUser')
        })
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();