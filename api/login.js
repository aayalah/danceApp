export default function(username, password){
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  var request = new Request('http://localhost:8030/api/users', {
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
  var request = new Request('http://localhost:8030/api/category', {
	method: 'GET',
	headers: headers,
  mode: 'cors'
});

  return fetch(request);

}

export {getCategories};
