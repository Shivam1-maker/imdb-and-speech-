//API stands for Application Programming Interface.
// An API is a software intermediary that allows two
// applications to talk to each other.In other words,
// an API is the messenger that delivers your request
// to the provider that you're requesting it from and
// then delivers the response back to you.

//A RESTful API is an application program interface
// (API) that uses HTTP requests to GET, PUT, POST and
// DELETE data. ...REST technology is generally preferred
// over the more robust Simple Object Access Protocol(SOAP(simple object access protocol))
// technology because REST uses less bandwidth, making it
// more suitable for efficient internet usage.

//methods to fetch data from sever
//axios //window.fetch //ajax call

//it is bulitin method within window object
//The Fetch API provides a fetch() method defined on
// the window object, which you can use to perform
// requests.This method returns a Promise that you can
// use to retrieve the response of the request.
// The fetch method only has one mandatory argument,
// which is the URL of the resource you wish to fetch.

//Axios is a Promise-based HTTP client for JavaScript
// which can be used in your front - end application and
// in your Node.js backend. ...The Axios library can be
// used in your plain JavaScript application or can be
// used together with more advanced frameworks like
// Vue.js.

//An Ajax call is an asynchronous request initiated by
// the browser that does not directly result in a page
// transition.A servlet request is a Java - specifc
// term(servlets are a Java specification) for servicing
// an HTTP request that could get a simple GET or
// POST(etc) or an Ajax request.

//if want to communicate any server gethub server by using
//window.fetch();

//console.log(window.fetch(githubserver));

// window
// 	.fetch(githubserver)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));
let githubserver = "https://api.github.com/users";

window
  .fetch(githubserver)
  .then((data) => {
    //convert readable stream into json data
    data.json().then((user) => {
      console.log(user);
    });
  })
  .catch((err) => console.log(err));

window
  .fetch(githubserver)
  .then((data) => {
    data
      .json()
      .then((users) => {
        let output = [];
        for (let user of users) {
          output += `
                    <div>
                    <img src="${user.avatar_url}" />
                    <h1>${user.login}</h>            
                    <a href = "${user.html_url}">Detail</a>
                    </div>`;
        }
        document.getElementById("template").innerHTML = output;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
