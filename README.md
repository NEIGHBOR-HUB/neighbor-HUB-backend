# Postgres Docker

## Getting Started

These will be the instructions to upload the postgres database using docker

### Documentation Docker image postgres

 
- [Public image documentation link](https://github.com/docker-library/postgres/blob/56a1986772dd0f9488d54dccb82427c0db0b0599/14/alpine/Dockerfile)
- [Postgres documentation in docker](https://www.example.com)
- [Additional resources Youtube](https://youtu.be/GXEatIJ2hXc)

### Installing

Follow the commands to run in your terminal

This first command will be executed only the first time you use the database, it is responsible for creating a container with the public image of docker

    docker run --name postgres -e POSTGRES_PASSWORD=nhb-back -d -p 5432:5432 postgres

Then use this command to check if the container is standing

    docker ps 

This will be the command for you to fully access the container, which allows you to execute the commands within it

    docker exec -it postgres bash

Finally, you run the command to be able to use the SQL commands

    psql -U postgres

You will be able to access this container through database administration tools (Ex: Dbeaver)

![Dbeaver connection main](https://dbeaver.com/wp-content/uploads/wikidocs_cache/images/ug/Wizard-MySQL-settings.png)

In the respective fields, you will pass the values
* Database: postgres
* Port: 5432
* Username: postgres
* Password: nhb-back
