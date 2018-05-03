 $(window).on("load", onHtmlLoaded);

function onHtmlLoaded() {
  
$.ajax('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
 method: 'GET',
 success: function(response) {
 window.alert("Developer joke of the day is:" + response);
 }
});
}

// punchline
// :
// "A waist of time."
// setup
// :
// "What do you call a belt made out of watches?"
// type
// :
// "general"

// var id
// var type
// var setup
// var punchline