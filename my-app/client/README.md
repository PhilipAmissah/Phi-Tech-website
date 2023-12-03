# Client Side of the Project

This is the client side of our project. It is built using React, a popular JavaScript library for building user interfaces.

## Structure

The client side of the project is structured as follows:

- `public/index.html`: This is the main HTML file that is loaded when someone visits your site. It includes a div with an id of "root", which is where your React app will be inserted.

- `src/components`: This directory contains all the React components for the different pages of your site. Each component is a JavaScript file that exports a function or class that renders some HTML.

- `src/App.js`: This is the main React component that wraps all the other components. It includes a Router that determines which component to display based on the current URL.

- `src/index.js`: This is the JavaScript file that renders the App component into the "root" div in your HTML file.

## Installation

To install the dependencies for the client side of the project, navigate to the `client` directory in your terminal and run the following command:

```
npm install
```

This will install all the dependencies listed in the `package.json` file.

## Running the Client Side

To start the client side of the project, run the following command in the `client` directory:

```
npm start
```

This will start a development server and open a browser window pointing to `http://localhost:3000`.

## Building for Production

To create a production build of the client side, run the following command in the `client` directory:

```
npm run build
```

This will create a `build` directory with a production-ready version of your client side code.