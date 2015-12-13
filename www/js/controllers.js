angular.module('200d.controllers', [])

.controller('AsistenciaCtrl', function($scope, $ionicModal, $log, Students, Institute, TDCardDelegate) {
  $scope.students = Students;
  $scope.institute = Institute;
  $scope.cards = [];
  $scope.searchText = '';

  $scope.addCard = function(student) {
      $scope.cards.push(angular.extend({}, student));
  }

  for(var i = 0; i < $scope.students.length; i++) $scope.addCard($scope.students[i]);

  $scope.cardSwipedLeft = function(student) {
    $scope.verifyStudentAsistency(student, true);
    console.log('Left swipe');
  }

  $scope.cardSwipedRight = function(student) {
    $scope.verifyStudentAsistency(student, false);
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

  $scope.clearSearch = function(){
    $log.info('Clearing search');
    $scope.searchText = undefined;
  }

  $scope.verifyStudentAsistency = function(student, boool){
    $scope.students[student.id].present = boool;
  }


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
