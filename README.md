# :cherry_blossom: About

A Journey Planner will plan your next journey in London using entered origin & destination places.

Website preview:
https://mivladie.github.io/journeyplanner/

# :memo: Table of Contents

* [:memo: Table of Contents](#memo-table-of-contents)
* [:rocket: Quick Start](#rocket-quick-start)
	* [Step 1: Installing the dependencies](#step-1-installing-the-dependencies)
	* [Step 2: Setting up configurations](#step-2-setting-up-configurations)
	* [Step 3: Launching the server](#step-3-launching-the-server)
* [:desktop_computer: Installation](#desktop_computer-installation)
	* [NodeJS](#nodejs)
* [:keyboard: Available Scripts](#keyboard-available-scripts)
* [:green_book: Learn More](#green_book-learn-more)
	* [ReactJS](#reactjs)
	* [React Google Maps](#react-google-maps)
    * [React Places Autocomplete](#react-places-autocomplete)
	* [Sass](#sass)

# :rocket: Quick Start

> You must have installed all of the software applications in the [installation](#desktop_computer-installation) section.

Quick start guide to set the server up and running.

## Step 1: Installing the dependencies

### Run `npm install`

Installs all of the necessary dependencies.

## Step 2: Setting up configurations

### Google Maps

* Open `/src/config/constants.js` file;
* Assign the API key to the `GOOGLE_MAPS_API_KEY` constant;
* Save the file.

### Transport for London

* Open `/src/config/constants.js` file;
* Assign the TLF ID & TLF KEY to the `TFL_APP_ID` & `TFL_APP_KEY` constants;
* Save the file.

## Step 3: Launching the server

### Run `npm start`

Starts the server in the development mode.

# :desktop_computer: Installation

In order to run the server, you must have installed all of the necessary software listed below.

## NodeJS

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

* [Download](https://nodejs.org/en/)

# :keyboard: Available Scripts

In the project directory, you can run:

### `npm install`

Installs all of the necessary dependencies.

### `npm start`

Runs the app in the development mode on port `:3000`.

### `npm run build`

Builds the app for production to the `/build` folder.

# :green_book: Learn More

References to the packages used in the project.

## ReactJS

React is a JavaScript library for building user interfaces.

* [Getting Started](https://reactjs.org/docs/getting-started.html)

## React Google Maps

`react-google-maps` provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances.

* [Documentation](https://tomchentw.github.io/react-google-maps/#documentation)

## React Places Autocomplete

A React component to build a customized UI for Google Maps Places Autocomplete

* [Getting Started](https://github.com/hibiken/react-places-autocomplete#getting-started)

## Sass

Sass is a preprocessor scripting language that is interpreted or compiled into CSS.

* [Documentation](https://sass-lang.com/documentation)