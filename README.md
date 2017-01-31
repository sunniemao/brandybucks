[![Stories in Ready](https://badge.waffle.io/brandybucks/brandybucks.png?label=ready&title=Ready)](https://waffle.io/brandybucks/brandybucks)
# brandybucks

> This is a tool that helps educators and parents better support students with disabilities by tracking student goals and streamlining the IEP reporting process. Teachers can easily submit updates with images of student while parents can easily view their child's progress and identify areas that need additional support.
>
> To view full press-release about this app [here](https://github.com/brandybucks/brandybucks/blob/master/_PRESS-RELEASE.md)
## Team

  - __Product Owner__: Sunnie Mao
  - __Scrum Master__: Tony Lopes
  - __Development Team Members__: Johnny Kwong, Isaac Hyoon

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> - Login with your user name and password.
> - Once logged-in navigation bar will appear from top and left side with options to access different feature.
> - The student search bar is located on top right corner for instant student look up.
> - To add update and message, click on left navigation bar's option to access student profile for updates.

## Requirements

- Node
- Express 4.14.0
- Nodemon 1.11.0
- React
- ReactDOM
- Bookshelf
- Knex
_ MySQL

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Local db setup

install local mySql if needed

```sh
brew install mysql
mysql.server start
mysql -u root -p (hit enter again for no pass)
create database myapp;
```

### Start server dev
```sh
npm start
```

### Start front-end dev (new terminal tab)
```sh
npm dev
```


### Roadmap

View the project roadmap [here](https://github.com/brandybucks/brandybucks/issues)


## Contributing

See [CONTRIBUTING.md](https://github.com/brandybucks/brandybucks/blob/master/_CONTRIBUTING.md) for contribution guidelines.
