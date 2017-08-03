# README

## Instalation (OSx/Linux)

Open your terminal, access the project root and run the following commands:

```
make
```

## Running the Project

Run the command `npm start` and the project will be available on `localhost:8000`.

## Instalation (OSx/Linux/Windows)

If you are using a Windows environment or if you want more pratice, you can also install this project using Docker.
Just run the follow command as administrator and everything will be automatically setup:

```
docker-compose up
```

## Running the Project

The project will be available on `localhost:8000`.

## Commands

* **npm start**: Starts a Dev server at [http://localhost:8000](http://localhost:8000)
* **npm test**: Runs the tests
* **npm run test:tdd**: Runs the tests and watch diffs
* **npm run test:coverage**: Runs the tests and verifies the test coverage
* **npm run coverage**: Starts a coverage panel at [http://localhost:9000](http://localhost:9000)
* **npm run lint**: Verifies code style patterns from React and ES6
* **npm run lint:fix**: Verifies code style patterns from React and ES6 and solve simple common problems
* **npm run ci**: Runs the tests and the lint
* **npm build**: Generates the `dist` folder, that goes to production
