# Instructions
## Past the initial install
Create config.yaml


Navigate to themes -> <themeName> 
Create theme.yaml by copying theme.toml and converting to yaml.
```
# theme.toml template for a Hugo theme
# See https://github.com/gohugoio/hugoThemes#themetoml for an example

name: "Dev Blog"
license: "MIT"
licenselink: "https://github.com/yourname/yourtheme/blob/master/LICENSE"
description: ""
homepage: "https://adrielperkins.dev"
tags: []
features: []
min_version: "0.41.0"

author:
    name: "Adriel Perkins"
    homepage: "https://adrielperkins.dev"

# If porting an existing theme
original:
    name: ""
    homepage: ""
    repo: ""

```
Delete theme.toml

### Setup SASS/CSS/Framework
Loading Bootstrap SASS code
Create themes/<themeName>/package.json file

#### Scratch that, trying something else. 
Going to use extended, and try mapping sccs again
Create assets folder
-> Create assets/scss folder
-> Add Bootstrap scss files into scss folder
A TON OF FILES

Create _default.html with head to try importing scss

```
   {{ $options := (dict "targetPath" "custom.css" "outputStyle" "compressed" "enableSourceMap" true "includePaths" (slice "node_modules/myscss")) }}
    {{ $style := resources.Get "scss/bootstrap.scss" | resources.ToCSS $options }}

```
