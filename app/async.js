exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    //you should understand how to use promises to handle asynchronicity
    // if (value === true || value == 'success'){
    // return new Promise((resolve, reject) => {
    //      resolve(value);
    // });

    var did = $.Deferred();
    setTimeout(function() {
      did.resolve(value);
    }, 10);
    return did.promise();
     
  },

  manipulateRemoteData: function(url) {
    //you should be able to retrieve data from the server and return a sorted array of names
    // fetch(url).then(function(response) {
    //    return response.json();
    //   //return response.names();
    // }).then(function(json){
    //   	console.log(json)
    //   	return json.people.names;
    // });
    var did = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      did.resolve(people.sort());
    });

    return did.promise();
  }
};


asyncAnswers.async(value) 