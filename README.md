# Google Maps ReactJS

## About

Google Maps ReactJS let's you add new markers in the map so you can keep track of your favorite locations! To add a new marker, insert a Title for it and its Latitude and Longitude. In order to test the application, we suggest some cities to add:

```json
{
	 [
	  "Title": "Uruguaiana",
	  "Latitude":-29.758459,
	  "Longitude":-57.0882
	 ],
	 [
	  "Title": "Porto Alegre",
	  "Latitude":-30.034647,
	  "Longitude":-51.217659
	 ],
	 [
	  "Title": "Santa Maria",
	  "Latitude":-29.6914,
	  "Longitude":-53.8008
	 ],
	 [
	  "Title": "Pelotas",
	  "Latitude":-31.776,
	  "Longitude":-52.3594
	 ],
	 [
	  "Title": "Passo Fundo",
	  "Latitude":-28.2612,
	  "Longitude":-52.4083
	 ],
}
```

## Installation

### Package Manager

First things first, you must install some things to start the application. To do that in this application, you must have installed [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/).

### Dependencies

Run `npm install` or `yarn` in the same folder of the file `package.json` to install all dependencies needed in this project

## Configuration

### .env

You must rename the file `.env.example` to `.env` and add a valid Google Maps API KEY in the environment variable `REACT_APP_GOOGLE_MAPS_API_KEY`.

Don't know how to get one? Check out this [link](https://www.youtube.com/watch?v=1JNwpp5L4vM)

## Initializing Application

This is a guide to initialize the application on its development mode.

You must run a script to start using this project. It starts the ReactJS environment in its default port 3000. Run `npm run-script start` or `yarn start`. Keep it running.

## Testing the application

This application has an automated test to check if the form is being submitted. To run it only once, run `npn run-script test:once` or `yarn test:once` .
If you wish to keep the testing environment running (to keep testing while changing the code, for example) run `npn run-script test` or `yarn test`.

## Important Packages Used

- [React Google Maps API](https://www.npmjs.com/package/@react-google-maps/api)

- [PropTypes](https://www.npmjs.com/package/prop-types)

- [React Hook Form](https://react-hook-form.com/)

- [React Redux](https://redux.js.org/)

- [React Router Dom](https://reactrouter.com/web/guides/quick-start)

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

- [Redux Saga](https://redux-saga.js.org/)

- [Styled-Components](https://styled-components.com/)

- [Yup](https://github.com/jquense/yup)
