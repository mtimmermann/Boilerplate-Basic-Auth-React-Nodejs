# Boilerplate web app: Passport local authentication, React, Node.js, Bootstrap, Webpack

Website boilterplate project setup with local passport authentication strategy. Authorized JsonWebToken token required for api routes and private React routes.

##### Server
* Node.js
* Express 4
* Passport local authentication strategy
	* JsonWebToken
	* Authorized token required for api routes, using middelware authorization check
* MongoDB/Mongoose

##### Client JS
* Webpack 3
	* ESLint
* React 15.6
	* React Router (react-router-dom) 4
    * Private and Public react routes
* ES6

#### Client Styles
* Bootstrap
* Font Awesome
* Sass

----

Build the client files dist folder
```sh
# For dev ->
npm run build:dev
# or to watch and build on the fly
npm run watch

# For prod->
npm run build:prod
```

----

Start the server
```sh
npm run start
```

## License
[MIT](LICENSE)
