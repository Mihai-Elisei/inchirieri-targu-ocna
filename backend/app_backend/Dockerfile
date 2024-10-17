# Use official Python image from the Docker Hub
FROM python:3.13-slim

# Set the working directory
WORKDIR /usr/src/app_backend

# Set environment variables to prevent Python from writing pyc files and for unbuffered output
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install dependencies
RUN apt-get update && apt-get install -y netcat-traditional
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the entrypoint script and Django project files into the Docker image
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app_backend/entrypoint.sh
RUN chmod +x /usr/src/app_backend/entrypoint.sh
COPY . .

# Set entrypoint to your script
ENTRYPOINT [ "/usr/src/app_backend/entrypoint.sh" ]
