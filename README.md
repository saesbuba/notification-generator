# Notification Generator

## Description

This notification generator is a web application built under the layered architectural software pattern.

The presentation layer is developed with the [React](https://react.dev/) library, while the business layer is built with [NestJS](https://nestjs.com/) and finally data persistence is managed by a log file.

The business layer provides a set of services exposed through URLs, the client or the presentation layer can communicate with these services through the HTTP protocol to obtain the necessary resources or services.

## Running the app

### Considerations

To get this app up and running you only need to run the next commands, if you have any concerns or questions, please contact the developer

```bash
$ docker login

$ docker compose up
```

Once the command `docker compose up` has been executed, go to the address [http://localhost:8080](http://localhost:8080) to access the application

## Stay in touch

- Author - [Saul Bustamante](https://github.com/saesbuba)
