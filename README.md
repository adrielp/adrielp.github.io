# Adriel Perkins Developer Website - Built Using GoHugo.io

## Development Setup
1. Install Hugo server
```
brew install hugo
```
2. Clone down repo
3. Navigate to `adrielperkins.dev/`
4. Call hugo server
```
hugo server
```
5. Navigate to `localhost:1313` to see the site in your browser.

## To Publish
1. Navigate to `adrielperkins.dev`
2. Run the following commands to build the site
```
hugo -e production --minify --cleanDestinationDir
```
> Currently, I'm pushing to "production" by doing the following set of commands:
```
hugo -e production --minify --cleanDestinationDir; \
   zip -r public.zip public/; \
   scp public.zip adriel@142.11.236.177:~/public.zip
```
> Then I SSH to the server and run the following set of commands:
```
rm -rf adrielperkins.dev/public/ \
   && unzip public.zip -d adrielperkins.dev/ \
   && docker-compose -f docker-compose.new-ap-dev.yml build; \
   docker-compose -f docker-compose.new-ap-dev.yml up -d; \
   docker-compose -f docker-compose.new-ap-dev.yml logs -f
```
> NOTE: Make sure to edit the config.yaml before running publish commands to point to the correct baseURL


## WebServer
The webserver directory hosts the `docker-compose.yaml` file and the `publish/` directory used to mount the NGINX 
container to that folder to server static content. 
This NGINX container is meant to sit behind a Traefik proxy in production that's be securely setup. 

For Development to test behind the NGINX webserver, simply:
1. Build the site with `hugo -e production --minify --cleanDestinationDir`
2. Run `docker-compose -f docker-compose.dev.yaml up -d` making sure that the volume is being mounted to the `public/` directory.
> NOTE: Make sure that in your `/etc/hosts` file your local IP points to adriel.docker.localhost
