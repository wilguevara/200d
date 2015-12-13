angular.module('200d.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicPopup, $ionicPlatform, $ionicHistory, $log,
  $ionicModal, /*$firebaseAuth,*/ $ionicLoading, $rootScope){

  $log.info('Login controller initialized');

  $scope.logo_source = 'img/text-logo.png';
  $scope.playAnimation = false;

  var timeToShow = 0;
  setTimeout(function(){
    $scope.playAnimation = true;
  }, timeToShow);

  $scope.singIn = function(user){
    $state.go('tab.asistencia');
  }

  //var ref = new Firebase($scope.firebaseUrl);
  //var auth = $firebaseAuth(ref);

  /*$scope.createUser = function (user) {
      console.log("Create User Function called");
      if (user && user.email && user.password && user.displayname) {
          $ionicLoading.show({
              template: 'Signing Up...'
          });

          auth.$createUser({
              email: user.email,
              password: user.password
          }).then(function (userData) {
              alert("User created successfully!");
              ref.child("users").child(userData.uid).set({
                  email: user.email,
                  displayName: user.displayname
              });
              $ionicLoading.hide();
              $scope.modal.hide();
          }).catch(function (error) {
              alert("Error: " + error);
              $ionicLoading.hide();
          });
      } else
          alert("Please fill all details");
  }

  $scope.signIn = function (user) {

      if (user && user.email && user.pwdForLogin) {
          $ionicLoading.show({
              template: 'Signing In...'
          });
          auth.$authWithPassword({
              email: user.email,
              password: user.pwdForLogin
          }).then(function (authData) {
              console.log("Logged in as:" + authData.uid);
              ref.child("users").child(authData.uid).once('value', function (snapshot) {
                  var val = snapshot.val();
                  // To Update AngularJS $scope either use $apply or $timeout
                  $scope.$apply(function () {
                      $rootScope.displayName = val;
                  });
              });
              $ionicLoading.hide();
              $state.go('tab.rooms');
          }).catch(function (error) {
              alert("Authentication failed:" + error.message);
              $ionicLoading.hide();
          });
      } else
          alert("Please enter email and password both");
  }*/

  /*UsersService.getUser().then( function(user){
    //si ya inicio sesión ir a la pantalla de Eventos
    $state.go('tab.events');
    $ionicHistory.clearHistory();
  }, function(err){
    //el usuario debe iniciar sesión
    $scope.singIn = function(user){
      if( !user ){
        $ionicPopup.alert({
          title : '<h1 style="font-size:4em;"><i class="icon ion-ios-close"></i></h1>',
          subTitle : '<h3>Error</h3>',
          template : '<div style="text-align:center;">Escriba los datos solicitados para ingresar.</div>'
        });
        return;
      }
      if( !user.username || user.username.trim().length < 1  ){
        $ionicPopup.alert({
          title : '<h1 style="font-size:4em;"><i class="icon ion-ios-close"></i></h1>',
          subTitle : '<h3>Error</h3>',
          template : '<div style="text-align:center;"<div>nombre de usuario</div>'
        });
        return;
      }
      if( !user.password || user.password.trim().length < 1){
        $ionicPopup.alert({
          title : '<h1 style="font-size:4em;"><i class="icon ion-ios-close"></i></h1>',
          subTitle : '<h3>Error</h3>',
          template : '<div style="text-align:center;"<div>clave de acceso</div>'
        });
        return;
      }
      //todos los datos correctos iniciar sesion en el server
      UsersService.doLogin(user.username, user.password)
      .success( function(user){
        $ionicPopup.alert({
          title : '<h1 style="font-size:4em;"><i class="icon ion-ios-checkmark-circled"></i></h1>',
          subTitle: '<h3>¡Bienvenid'+ ( user.sex === 'f' ? 'a' : 'o' ) +'!</h3>',
          template : '<div class="item item-avatar">'+
                        '<img src="'+ user.picture +'">'+
                        '<h2>'+user.name+'</h2>'+
                        '<p style="white-space:normal;">'+user.email+'</p>'+
                      '</div>'
        });
        $state.go('tab.events');
      })
      .error( function(err){
        console.log(err);
         $ionicPopup.alert({
            title: 'Identidad no verificada',
            template: 'No se pudo verificar su Identidad. ('+ err + ')'
          });
      });

    }//end Signin function
    */

    /** facebook OAuth **/
    /*$ionicPlatform.ready(function () {
      $scope.facebookSignIn = function(){
        UsersService.facebookOAuth()
        .then(function(result) {
          //success gettign token, user give permission
          $ionicPopup.alert({
            title : '<h1 style="font-size:4em;"><i class="icon ion-ios-checkmark-outline"></i></h1>',
            subTitle: '<h3>¡Bienvenid'+ ( result.sex === 'f' ? 'a' : 'o' ) +'!</h3>',
            template : '<div class="item item-avatar">'+
                          '<img src="'+ result.picture +'">'+
                          '<h2>'+result.name+'</h2>'+
                          '<p style="white-space:normal;">'+result.email+'</p>'+
                        '</div>'
          });
          $state.go('tab.events');
        }, function(error) {
          console.log(error);
          $ionicPopup.alert({
            title: 'Facebook inaccesible',
            template: 'No logramos obtener sus datos desde facebook.('+error+')'
          });
        });

      }

    });

  });*/

  //registering section
  $scope.register = {
    email : '',
    username : '',
    password : ''
  }
  $scope.validate = {
    email : {
      is_valid : true,
      message : ''
    },
    username: {
      is_valid : true,
      message : ''
    },
    password: {
      is_valid : true,
      message : ''
    }
  };

  $scope.singup = function(){
    $scope.validate = {
      email : {
        is_valid : true,
        message : ''
      },
      username: {
        is_valid : true,
        message : ''
      },
      password: {
        is_valid : true,
        message : ''
      }
    };

    /*UsersService.doSignup($scope.register.username, $scope.register.email, $scope.register.password).then(function(resp){
      $ionicPopup.alert({
        title : '<h1 style="font-size:4em;"><i class="icon ion-checkmark-circled"></i></h1>',
        subTitle: '<h3>Cuenta creada con éxito!</h3>',
        template : '<p>Por favor verifique su cuenta haciendo clic en el enlace que le hemos enviado a '+$scope.register.email+'.</p>'
      });
      $scope.closeModal();
    }, function(err){
      if( typeof(err) === 'object' ){
        if( err.validate.message ){
          $scope.validate.old.is_valid = false;
          $scope.validate.old.message = err.validate.message
        }else if( err.validate['__all__'] ){
          angular.forEach(err.validate, function(err_details, input_name){
            $scope.validate.new1.is_valid = false;
            $scope.validate.new1.message = err.validate['__all__'];
            $scope.validate.new2.is_valid = false;
            $scope.validate.new2.message = err.validate['__all__'];
          });
        }else{
          angular.forEach(err.validate, function(err_details, input_name){
            $scope.validate[input_name].is_valid = false;
            $scope.validate[input_name].message = err_details;
          });
        }
        $ionicPopup.alert({
          title: '<h1 style="font-size:4em;"><i class="icon ion-close-circled"></i></h1>',
          subTitle: '<h3>Encontramos errores</h3>',
          template: 'No se logró crear tu cuenta. ('+ err.message + ')'
        });

      }else{
        $ionicPopup.alert({
          title: '<h1 style="font-size:4em;"><i class="icon ion-close-circled"></i></h1>',
          subTitle: '<h3>Encontramos errores</h3>',
          template: 'Problemas para conectarse con el servidor. ('+ err + ')'
        });
      }
    });*/

  };

  $scope.sendingEmail = false;
  $scope.resendEmailVerification = function(){
    $scope.verify = {};
    var verifyEmailPopup = $ionicPopup.show({
      template: '<input type="email" ng-model="verify.email">',
      title: 'Reenviar correo de confirmación.',
      subTitle: 'Escribe aquí el correo que usaste al momento de crear tu cuenta en Me Apunto.',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b><i class="ion-paper-airplane"></i> Enviar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.verify.email) {
              //don't allow the user to submit unless s/he enters a valid email
              e.preventDefault();
            } else {
              return $scope.verify.email;
            }
          }
        }
      ]
    });


    verifyEmailPopup.then(function(email) {

      if( email ){
        $scope.sendingEmail = true;
        UsersService.requestEmailVerification(email).then(function(resp){
          $ionicPopup.alert({
            title : '<h1 style="font-size:4em;"><i class="icon ion-checkmark-circled"></i>&nbsp;</h1>',
            subTitle: '<h3>¡Enviado!</h3>',
            template : 'Revisa tu bandeja de entrada y sigue el enlace que hemos enviado.'
          });
          $scope.sendingEmail = false;
        }, function(err){
          $ionicPopup.alert({
            title: '<h1 style="font-size:4em;"><i class="icon ion-close-circled"></i></h1>',
            subTitle: '<h3>Error</h3>',
            template : err
          });
          $scope.sendingEmail = false;
        });
      }
      
    });

  };

  $ionicModal.fromTemplateUrl('signup-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  });

  $scope.showSignupModal = function(){
    $scope.modal.show();
  };

  $scope.closeModal = function(){
    $scope.checkinEventObj = null;
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });


})

.controller('AsistenciaCtrl', function($scope, $ionicModal, $log, Students, Institute, TDCardDelegate, SMSservice) {
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

    if( boool ){
      SMSservice.sendSmsNotify('97788215', 'Si hijo ' + student.name + ' no fue a clases! Regañelo! :D' ).then(
        function(resp){
          $log.info(JSON.stringify(resp));
        }, function(error){
          alert('Error papi');
          $log.error( JSON.stringify(error) );
        });
    }

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
