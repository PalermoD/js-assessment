exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	   console.log(obj);
  	   console.log(fn);
       return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
       var newArray = [];

       for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
             newArray.push(prop + ': ' + obj[prop]);
          }
       }

      return newArray;
   }
};
