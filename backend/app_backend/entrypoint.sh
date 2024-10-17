#!/bin/sh

if [ "$DATABASE" = "postgres" ]; then
    echo "Checking if the database is running..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "The database is up and running :-D"
fi

# Run migrations
python manage.py migrate

# Execute the CMD from Dockerfile or any command passed to Docker
exec "$@"
