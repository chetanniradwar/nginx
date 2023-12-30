# nginx


## Nginx Configuration

## Nginx Commands
1. show nginx processess
    ```
    ps -C nginx -f
    ```
2. nignx reload
    ```
    nginx -s reload
    ```
3. create container from the image
    ```
    docker-compose up -d
    ```
4. build image according to docker-compose file
    ```
    docker-compose build
    ```


## Basic nginx setup
1. docker run -it --rm -d -p 1000:80 --name nginx nginx

## Nginx to serve static content
1. cd static_content_server_demo 
2. docker build -t static-server . This will create a custom nginx image
3. docker run -it --rm -d -p 2000:80 --name static-server static-server 
