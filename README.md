# Todo List Project

## Usage

First of all, clone the `repo`:

```sh
$ git clone git@github.com:JaviMuru/todo-list.git
```

Move to the project dir:

```sh
$ cd todo-list/
```

### Back Project

In order to access to the back project:

```sh
$ cd back/
```

Install dependencies:

```sh
$ yarn install
```

Run with [Docker](https://www.docker.com/) PostgreSQL database:

```sh
$ docker-compose up -d 
```

Run migrations:

```sh
$ yarn run migrations
```

Run the API:

```sh
$ yarn start
```

Execute tests:

```sh
$ docker-compose up -d
$ yarn run migrations
$ yarn test  
```

Note: For a lab practice the dev database and the e2e test is the same

### Front Project

In order to access to the front project:

```sh
$ cd front/
```

Install dependencies:

```sh
$ yarn install
```

Run the Web App:

```sh
$ yarn start
```

Execute tests:

```sh
$ yarn test  
```
