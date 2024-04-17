# Notification Generator

## Description

This notification generator is a web application built under the layered architectural software pattern.

The presentation layer is developed with the [React](https://react.dev/) library, while the business layer is built with [NestJS](https://nestjs.com/) and finally data persistence is managed by a log file.

The business layer provides a set of services exposed through URLs, the client or the presentation layer can communicate with these services through the HTTP protocol to obtain the necessary resources or services.

## Running the app

### Considerations

To get this app up and running, first, you only need to clone this repository, once you have cloned it you only need to run the next commands inside of the root folder of the project, if you have any concerns or questions, please reach out developer

```bash
$ docker login

$ docker compose up
```

Once the command `docker compose up` has been executed, go to the address [http://localhost:8080](http://localhost:8080) to access the application

![image](https://github.com/saesbuba/notification-generator/assets/24261976/86f971d7-38d4-42de-b780-2e0becd562ac)

## Stay in touch

- Author - [Saul Bustamante](https://github.com/saesbuba)
