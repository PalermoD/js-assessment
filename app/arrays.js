exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
       var total = 0;
       for ( var i = 0; i < arr.length; i++){
           total += arr[i];
        }
        
        return total;
  },

  remove: function(arr, item) {
        var newArray = []; 
        for (var i = 0; i < arr.length; i++){
          if (arr[i] !== item){
            newArray.push(arr[i]);
          }
        }
        
        return newArray;
  },

  removeWithoutCopy: function(arr, item) {
        for (var i = 0; i < arr.length; i++){
          if (arr[i] !== item){
            arr.splice(arr[i], item);
          }
        }
        return arr;
  },

  append: function(arr, item) {
       arr.push(item);
       return arr;
  },

  truncate: function(arr) {
     arr.pop();
     return arr;
  },

  prepend: function(arr, item) {
     arr.unshift(item);
     return arr;
  },

  curtail: function(arr) {
     arr.shift();
     return arr;
  },

  concat: function(arr1, arr2) {
      var concated = arr1.concat(arr2);
      return concated;

  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if( arr[i] == item){
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
      var exists = {};
      var duplicatesItems = [];

      for (var i = 0; i < arr.length; i++) {
         exists[arr[i]] = exists[arr[i]] ? exists[arr[i]] + 1 : 1;
       }

       for (var item in exists) {
          if (exists.hasOwnProperty(item) && exists[item] > 1) {
           duplicatesItems.push(parseInt(item));
          }
        }

    return duplicatesItems;
  },
  square: function(arr) {
      var sqrArray = [];
      for (var i = 0; i < arr.length; i++){
        var squaredItem = Math.pow(arr[i], 2);
        sqrArray.push(squaredItem);
      }
      console.log(sqrArray);
      return sqrArray;
  },

  findAllOccurrences: function(arr, target) {
      var newArray = [];

      for (var i = 0; i < arr.length; i++) {
         if (arr[i] === target) {
            newArray.push(i);
          }
      }
      return newArray;
  }
};
