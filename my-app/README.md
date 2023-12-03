# My App

This is a full-stack JavaScript application using React for the frontend and Node.js with Express for the backend. The website is hosted on Github pages.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client is a React application. It is located in the `client` directory. It includes several pages: homepage, about us, services, projects, contact us, and blog/news. Each page is a separate React component.

### Server

The server is a Node.js application using Express. It is located in the `server` directory. It includes routes and controllers for handling requests.

## Installation

To install the dependencies for the client and the server, run the following commands:

```
cd client
npm install
cd ../server
npm install
```

## Running the Application

To start the client and the server, run the following commands:

```
cd client
npm start
cd ../server
npm start
```

The client will be available at `http://localhost:3000` and the server will be available at `http://localhost:5000`.

## Deployment

The website is hosted on Github pages. To deploy the client, run the following command:

```
cd client
npm run deploy
```

The server is not deployed because Github pages only supports static websites. To deploy the server, you would need to use a different hosting service.