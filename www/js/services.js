angular.module('200d.services', ['ngResource'])

/*.factory("Auth", ["$firebaseAuth", "$rootScope",
 function ($firebaseAuth, $rootScope) {
    var ref = new Firebase(firebaseUrl);
    return $firebaseAuth(ref);
}])*/

.factory('InstitueService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var institute = {
    id: 1,
    title: 'Instituto España Jesus Milla Selva',
    shield: 'img/escudo-iejms.png',
    code : '0808080808080',
    location : {
      lat: '14.0653568',
      lng: '-87.183411',
      description : 'Colonia Kennedy, 2 entrada contiguo a iglesia catolica.'
    }

  };

  return {
    data: function() {
      return institute;
    }
  };
})

.factory('StudentsService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var students = [{
    id: 0,
    name: 'Luis Alonzo Espinoza',
    face: 'img/luis.jpg',
    inClass : true,
    atSchool : true,
    present : null,
    idnumber : '0801-1988-15617'

  }, {
    id: 1,
    name: 'Pedro Zelaya',
    face: 'img/pedro.jpg',
    inClass : null,
    atSchool : null,
    present : null,
    idnumber : '0101-2004-15617'

  }, {
    id: 2,
    name: 'Marta Cecilia Alvarado',
    face: 'img/marta.jpg',
    inClass : false,
    atSchool : true,
    present : null,
    idnumber : '0301-1988-15617'

  }, {
    id: 3,
    name: 'Jose Ramon Guerrero',
    face: 'img/jose.jpg',
    inClass : null,
    atSchool : true,
    present : null,
    idnumber : '1010-2004-15617'

  }, {
    id: 4,
    name: 'Carmen Amarilis Lara',
    face: 'img/carmen.jpg',
    inClass : false,
    atSchool : true,
    present : null,
    idnumber : '0101-2013-15617'

  }];

  return {
    all: function() {
      return students;
    },
    remove: function(student) {
      students.splice(students.indexOf(student), 1);
    },
    get: function(studentId) {
      for (var i = 0; i < students.length; i++) {
        if (students[i].id === parseInt(studentId)) {
          return students[i];
        }
      }
      return null;
    }
  };
})

.service('SMSservice', function($q, $resource, $ionicLoading, $log){

  var smsRes = $resource( 'http://172.16.0.138:8000/sace/ws/send/sms/', {
      to : '@number', 
      body : '@myBody'
    },
    { 'sendSms' : { 
    isArray : false,
    method : 'GET',
    /*data : {
      to : '@number', 
      body : '@myBody'
    }*/
    /*withCredentials : true,
    headers : {
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest : function(obj){
        var str = [];
        for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      }*/
    }
  });

  return{
    sendSmsNotify : function(_to, _body){
      var deferred = $q.defer();
      var promise = deferred.promise;

      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });

      smsRes.sendSms({ 
        to : _to, 
        body : _body
      },function(resp){
        $ionicLoading.hide();
        deferred.resolve(resp);
      },
      function(err){
        $ionicLoading.hide();
        $log.error( JSON.stringify(err) );
        if( err.status === 400 ){
          var validations = {
            'message' : 'Porfavor corrija los errores en rojo.',
            validate : err.data
          };

          deferred.reject(validations);
        }else if( err.status === 401){
          deferred.reject("Su sesión ha expirado.");
        }else{
          deferred.reject("Servidor inaccesible: (" + err.status + ")(" + err.statusText + ")");
        }
      });

      promise.success = function(fn){
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn){
        promise.then(null, fn);
        return promise;
      }

      return promise;
    }
  };

});
