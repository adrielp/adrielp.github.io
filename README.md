# hugo-dev-site

# Hugo + Docker Setup

1. Pull down the docker image
    1. `docker pull klakegg/hugo:latest-ext`
    2. Make sure to pull down the -ext version if planning on using SCSS - etc. 
    3. Run container as server
**runs the server**
```
docker run --rm -it \
-v $(pwd):/src \
-p 1313:1313 \
klakegg/Hugo:latest-ext \
server
```
**runs the container and creates a new website**
```
# note - this command run outside of the directory
docker run --rm -it -v $(pwd):/src -p 1313:1313 klakegg/hugo:latest-ext new site adrieldev
docker run --rm -it -v $(pwd):/src -p 1414:1313 klakegg/hugo:latest-ext new site adrieldev
#####OUTPUT#####
Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".
```

**runs the container and creates a new theme**
```
# must change into site directory to run 
docker run --rm -it -v $(pwd):/src -p 1414:1313 klakegg/hugo:latest-ext new theme dev-blog
```
**runs the container as a server**
```
# must change into site directory to run 
docker run --rm -it -v $(pwd):/src -p 1414:1313 klakegg/hugo:latest-ext server
```


# Startup commands
**start docker first**
```
code Development/repos/apdev-hugo
code Development/repos/Adriel_Developer_Portfolio_Website_BV && code Development/repos/hugo-trash
cd adrielperkins.dev
docker run --rm -it -v $(pwd):/src -p 1313:1313 klakegg/hugo:latest-ext server
docker run --rm -it -v $(pwd):/src klagegg/hugo:latest-ext new projects/project.md
```