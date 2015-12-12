angular.module('200d.services', [])

.factory('StudentsService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var students = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png',
    inClass : true,
    atSchool : true,
    idnumber : '0801-1988-15617'

  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/max.png',
    inClass : null,
    atSchool : null,
    idnumber : '0101-2004-15617'

  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/adam.jpg',
    inClass : false,
    atSchool : true,
    idnumber : '0301-1988-15617'

  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/perry.png',
    inClass : null,
    atSchool : true,
    idnumber : '1010-2004-15617'

  }, {
    id: 4,
    name: 'Mike Harrington',
    face: 'img/mike.png',
    inClass : false,
    atSchool : true,
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

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
