Replace all `ToDo` notes in this file and adjust also the following files:
- package.json:
    - Adjust the general parts like name, description, ...
    - Adjust the three scripts `npm run start`, `npm run build` and `npm run test`
- wcs-manifest.json:
    - Adjust the general parts like title, description, ...
    - Adjust the configuration part with all possible configuration options (https://webcomponents.opendatahub.bz.it/getting-started)

# Webcomp Meteo Generic

All the meteo features in one component.

## Table of contents

- [Usage](#usage)
- [Gettings started](#getting-started)
- [Tests and linting](#tests-and-linting)
- [Deployment](#deployment)
- [Docker environment](#docker-environment)
- [Information](#information)

## Usage

ToDo: Include the webcompscript file `dist/webcomp-meteo-generic.js` in your HTML and define the web component like this:

```html
<webcomp-meteo-generic
    width="100%"
    height="500px"
    fontFamily="Arial"
    language="it"
    mapAttribution='Map Tiles &copy; <a href="http://developer.here.com">HERE</a>'
    currentLocation='{ "lat": 46.31, "lng": 11.26 }'
    tiles-url="https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=">
</webcomp-meteo-generic>
```

### Attributes

#### width
The height of the component. Example and recommended: "100%".


#### height
The height of the component. It works for the map and the video tab. Example: "500px".

#### fontFamily
The font family to use in the component. Example: "Arial".

#### language
The language to use in the widget. Possibilities: en, de, it.

#### currentLocation

The location for the current position pointer. Example: `{ "lat": 46.31, "lng": 11.26 }`.

#### mapAttribution

Map tiles attribution.


#### tiles-url

Url of the server's tiles.


## Getting started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- ToDo: Check the prerequisites
- Node 12 / NPM 6

For a ready to use Docker environment with all prerequisites already installed and prepared, you can check out the [Docker environment](#docker-environment) section.

### Source code

Get a copy of the repository:

```bash
ToDo: git clone https://github.com/noi-techpark/project-name.git
```

Change directory:

```bash
ToDo: cd project-name/
```

### Dependencies

Download all dependencies:

```bash
npm install
```

### Build

Build and start the project:

```bash
npm run start
```

The application will be served and can be accessed at [http://localhost:8080](http://localhost:8080).

## Tests and linting

The tests and the linting can be executed with the following commands:

```bash
npm run test
npm run lint
```

## Deployment

To create the distributable files, execute the following command:

```bash
npm run build
```

## Docker environment

For the project a Docker environment is already prepared and ready to use with all necessary prerequisites.

These Docker containers are the same as used by the continuous integration servers.

### Installation

Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### Dependenices

First, install all dependencies:

```bash
docker-compose run --rm app /bin/bash -c "npm install"
```

### Start and stop the containers

Before start working you have to start the Docker containers:

```
docker-compose up --build --detach
```

After finished working you can stop the Docker containers:

```
docker-compose stop
```

### Running commands inside the container

When the containers are running, you can execute any command inside the environment. Just replace the dots `...` in the following example with the command you wish to execute:

```bash
docker-compose run --rm app /bin/bash -c "..."
```

Some examples are:

```bash
docker-compose run --rm app /bin/bash -c "npm run test"
```

## Information

### Support

ToDo: For support, please contact [info@opendatahub.bz.it](mailto:info@opendatahub.bz.it).

### Contributing

If you'd like to contribute, please follow the following instructions:

- Fork the repository.

- Checkout a topic branch from the `development` branch.

- Make sure the tests are passing.

- Create a pull request against the `development` branch.

A more detailed description can be found here: [https://github.com/noi-techpark/documentation/blob/master/contributors.md](https://github.com/noi-techpark/documentation/blob/master/contributors.md).

### Documentation

More documentation can be found at [https://opendatahub.readthedocs.io/en/latest/index.html](https://opendatahub.readthedocs.io/en/latest/index.html).

### Boilerplate

The project uses this boilerplate: [https://github.com/noi-techpark/webcomp-boilerplate](https://github.com/noi-techpark/webcomp-boilerplate).

### License

The code in this project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 license. See the [LICENSE.md](LICENSE.md) file for more information.
