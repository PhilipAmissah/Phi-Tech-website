# Server Side

This is the server side of our application. It is built with Node.js and Express.

## Getting Started

To get started with the server side of the application, you will need to have Node.js and npm installed. Once you have those, you can install the dependencies with the following command:

```
npm install
```

This will install all the necessary dependencies as listed in the `package.json` file.

## Running the Server

To start the server, you can use the following command:

```
npm start
```

This will start the server on `localhost:5000`.

## Structure

The server side of the application is structured as follows:

- `app.js`: This is the main Node.js file for your server. It sets up an Express app and includes middleware and routes.

- `routes/index.js`: This file sets up the routes for your Express app. It determines what should happen when someone visits different URLs on your site.

- `controllers/index.js`: This file exports functions that handle the logic for your routes. Each function takes a request and a response object, and sends a response based on the request.

## Dependencies

The server side of the application has the following dependencies, as listed in the `package.json`:

- `express`: This is a web application framework for Node.js. It is used to build the server.

- `cors`: This is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

- `body-parser`: This is a Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before your handlers.

## Scripts

The `package.json` file includes the following scripts for the server side of the application:

- `start`: This script starts the server. It can be run with the command `npm start`.

- `test`: This script runs the tests for the server side of the application. It can be run with the command `npm test`.

## Testing

To run the tests for the server side of the application, you can use the following command:

```
npm test
```

This will run all the tests and display the results in your terminal.