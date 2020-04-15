# AIT IA-A

How to run it:
* clone the directory `git clone https://github.com/nurdtechie98/LetsGetItDone.git`
* enter the directory `cd LetsGetItDone` 
* download all the dependencies `npm i` 
* goto .env file
* start mongoDB
* specify PORT (if only you dont want it on 8080 for some reson) and DB_URI(most of will have it running locally on 27017 so no need)
* goto terminal and during development run the command `npm run watch`

<details open>
<summary>Experiment 3</summary>
<details open>
<summary>Routing</summary>
<ul>
  <li> <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/app.js#L25-#L29">Basic Routing</a></li> 
  <li> Basic middleware routing: <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/app.js#L21">use</a> <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/controllers/user.controller.js">define</a></li>
  <li><a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/controllers/user.controller.js#L20-#L28">Accessing parameter in routing</a> param is id see route defn and usage</li>
  <li><a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/utils/middleware.js#L24-#L28">Handling 404 errors</a>: done using custom middleware (note: in app.js used at last, after all routes)</li>
  <li>Sample routes for an application</li>
</ul>
</details>
<details>
  <summary>Demonstrate the use of JSON API with express.js</summary>
  <ul>
   <li><a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/app.js#L16"> middleware </a></li>
    <li><a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/controllers/user.controller.js#L8-#L13"> sending and parsing</a></li>
</details>
<details>
  <summary>Server and client application</summary>
  TLS: demonstrate the use of Server and client application using node.js<br>
  Implemeted using websockets<ul><li> server is created in <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/app.js#L52-#L59">app.js</a> itself</li>
  <li>Client file named <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/client.js">client.js<a><br>
  In order to run start our server, then in another tab `node client.js`</li></ul>
</details>
<details>
  <summary>Setting cookies with cookie-parser: Demonstrate an example for setting and reading cookies using the cookie-parser module</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/app.js#L18">middleware to be added</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/controllers/auth.controller.js#L27">setting of cookies</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/utils/middleware.js#L42">reading of cookies</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/controllers/auth.controller.js#L39">Delete Cookies</a><br>
</details>
<details>
  <summary>Custom middleware to check the user age is valid or not</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/utils/middleware.js#L30-#L39">define</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/controllers/user.controller.js#L6">usage</a>
</details>
<details>
  <summary>File operation</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/utils/files.js">definition</a>
</details>
<details>
  <summary>Authenticate with an email address</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/controllers/auth.controller.js">routes</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/4bca686b23f280e50f9e86738e458fc592419c80/utils/middleware.js#L41-#L50">middleware</a>
</details>
<details>
  <summary>Cluster module</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/cluster.js">main code</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/worker.js">worker code basically our normal entire app.js in function</a><br>
  to run `npm run cluster`
</details>
<details>
  <summary>Prompting user input via CLI</summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/utils/prompt.js"> To run `node utils/prompt.js` </a>
</details>
<details>
  <summary> File Upload </summary>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/controllers/file.controller.js"> routes</a><br>
  <a href="https://github.com/nurdtechie98/LetsGetItDone/blob/master/public/views/fileUpload.html"> html file </a><br>
  To upload file got to http://localhost:8080/file/uploadSingle <br>
  Check the uploads file in your root directory, you will find your uploaded files
</details>
</details>
