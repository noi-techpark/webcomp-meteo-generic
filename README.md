# Meteo Generic - Web component

[![REUSE status](https://api.reuse.software/badge/github.com/noi-techpark/webcomp-meteo-generic)](https://api.reuse.software/info/github.com/noi-techpark/webcomp-meteo-generic)

All the meteo features in one component.

## Table of contents

- [Usage](#usage)
- [Gettings started](#getting-started)
- [Deployment](#deployment)
- [Docker environment](#docker-environment)
- [Information](#information)
<!-- - [Tests and linting](#tests-and-linting) -->

## Usage

Include the webcompscript file `dist/webcomp-meteo-generic.js` in your HTML and define the web component like this:
```html
<webcomp-meteo-generic
    width="100%"
    height="800px"
    fontFamily="Arial"
    language="it"
    mapAttribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
    currentLocation='{ "lat": 46.31, "lng": 11.26 }'
    tiles-url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    enabledStations="3C461DDEDCE84E25BB8125B0E051344C,00390SF"
    visibleParameters='["air-temperature","temperature","precipitation"]'>
</webcomp-meteo-generic>
```

### Attributes

#### width

Give a fixed width to the component. Works only from desktop up. You can use `px` or `%` as unit size.

Examples: `width="100%"`

#### height

Give a fixed height to the component. Works only from desktop up. You can use `px` or `%` as unit size.

Example: `height="500px"`

#### fontFamily

Set the typeface.

Example: `fontFamily="Arial"`

#### language

Set the default and starting language. Possible values are "en" or "de" or "it"

Example: `language="en"`

#### mapAttribution

Set the acknowledgement for the map tiles provider.

Example: `mapAttribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap contributors</a>"`

#### currentLocation

Set the starting point position on the map.

Example: `currentLocation='{ "lat": 46.31, "lng": 11.26 }'`

#### tiles-url

Set the URL of the API that provides the tiles.

Example: `tiles-url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"`

#### enabledStations

Set the stations that the map will show. It's a CSV like field. The parameter accepts both `Id` and `scode` values.

Example: `"3C461DDEDCE84E25BB8125B0E051344C,00390SF"`

#### visibleParameters

Set the visible parameters in the station details tab.

Example: `'["air-temperature","temperature","precipitation"]'`

#### visibleTabs

Set the visible tabs in the menu. The default value is:
```js
["map", "forecasts", "video", "onTheMountains", "byArea"]
```
With all the tabs enabled.

example: `visibleTabs='["video", "onTheMountains", "byArea"]'`

#### startingTab

Set the initial tab that the user will see. You can choose one between those values:
`"map", "forecasts", "video", "onTheMountains", "byArea"`

example: `startingTab="onTheMountains"`



These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- Node 14.15.4 / Yarn 1.22.10

For a ready to use Docker environment with all prerequisites already installed
and prepared, you can check out the [Docker environment](#docker-environment)
section.

### Source code

Get a copy of the repository:

```bash
git clone git@github.com:noi-techpark/webcomp-meteo-generic.git
```

Change directory:

```bash
cd webcomp-meteo-generic/
```

### .env

Create a `.env` file in the main directory.
Fill it with this content:

```
HEREMAPS_API_KEY=YourKey
```

Replace `YourKey` with your API token to use the tiles and the search bar.

### Dependencies

Download all dependencies:

```bash
yarn install
```

### Build

Build and start the project:

```bash
yarn start
```

The application will be served and can be accessed at [http://localhost:8080](http://localhost:8080).

<!-- ## Tests and linting

The tests and the linting can be executed with the following commands:

```bash
npm run test
npm run lint
``` -->

## Deployment

To create the distributable files, execute the following command:

```bash
yarn build
```

## Docker environment

For the project a Docker environment is already prepared and ready to use with all necessary prerequisites.

These Docker containers are the same as used by the continuous integration servers.

### Installation

Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### Dependenices

First, install all dependencies:

```bash
docker-compose run --rm app /bin/bash -c "yarn install"
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

When the containers are running, you can execute any command inside the
environment. Just replace the dots `...` in the following example with the
command you wish to execute:

```bash
docker-compose run --rm app /bin/bash -c "..."
```

Some examples are:

```bash
docker-compose run --rm app /bin/bash -c "yarn start"
```

## Information

### Support

ToDo: For support, please contact [help@opendatahub.bz.it](mailto:help@opendatahub.bz.it).

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
