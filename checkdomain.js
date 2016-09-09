var pagespeed = require('gpagespeed');
var options = {
  url: 'http://www.itoluca.com',
  key: 'AIzaSyDiq27HbCRRGnVE7MxbdQsQweBYMYcCQ3c'
};
 
pagespeed(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
