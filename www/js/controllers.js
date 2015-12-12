angular.module('200d.controllers', [])

.controller('AsistenciaCtrl', function($scope, $ionicModal, Students, TDCardDelegate) {
  $scope.students = Students;
  var cardTypes = Students;
  $scope.cards = [];

  $scope.addCard = function(i) {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
  }

  for(var i = 0; i < 3; i++) $scope.addCard();

  $scope.cardSwipedLeft = function(index) {
      console.log('Left swipe');
  }

  $scope.cardSwipedRight = function(index) {
      console.log('Right swipe');
  }

  $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
      console.log('Card removed');
  }

  $ionicModal.fromTemplateUrl('tinder-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
