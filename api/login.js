
var url = 'https://danceappserver.herokuapp.com' //'http://localhost:8090'


export default function(username, password){
  console.log(url);
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  var request = new Request(url + '/api/users', {
	method: 'POST',
	headers: headers,
  mode: 'cors',
  body: JSON.stringify({
		username: username,
		password: password
	})});

  return fetch(request);

}


var getCategories = function(username, password) {

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  var auth = username + ":" + password;
  headers.append("Authorization", "Basic " + btoa(auth));

  console.log(btoa(auth));
  var request = new Request(url + '/api/category', {
	method: 'GET',
	headers: headers,
  mode: 'cors'
});

  return fetch(request);

}

var getVideos = function(username, password, category) {

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  var auth = username + ":" + password;
  headers.append("Authorization", "Basic " + btoa(auth));

  var request = new Request(url + '/api/category/'+category+'/videos', {
	method: 'GET',
	headers: headers,
  mode: 'cors'
});

  return fetch(request);

}

var submitComment = function(username, password, video, text) {

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  var auth = username + ":" + password;
  headers.append("Authorization", "Basic " + btoa(auth));

  var request = new Request(url + '/api/comments/'+video, {
  method: 'POST',
  headers: headers,
  mode: 'cors',
  body: JSON.stringify({
		text: text
	})});


  return fetch(request);


}

var getComments = function(username, password, video) {
    console.log("getCommnets");
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  var auth = username + ":" + password;
  headers.append("Authorization", "Basic " + btoa(auth));

  var request = new Request(url + '/api/comments/'+video, {
  method: 'GET',
  headers: headers,
  mode: 'cors'
});



  return fetch(request);



}

var uploadVideo = function(username, password, title, video, categories, description, file){
console.log(file)
var headers = new Headers();
headers.append("Content-Type", "multipart/form-data");
headers.append("Access-Control-Allow-Origin", "*");

var auth = username + ":" + password;
headers.append("Authorization", "Basic " + btoa(auth));

var data = new FormData();
data.append("title", title);
data.append("uri", video);
data.append("categories", categories);
data.append("description", description);
data.append("file", file);

var request = new Request(url + '/api/videos', {
method: 'POST',
headers: headers,
mode: 'cors',
body: data
});



return fetch(request);

}


export {getCategories, getVideos, submitComment, getComments, uploadVideo};
