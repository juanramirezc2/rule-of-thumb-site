# rule-of-thumb-site
serverless site that let's you thumbs up or down on people

## how to build 
```sh
git clone https://github.com/jg-rc/rule-of-thumb-site.git
```
```sh
cd rule-of-thumb-site && npm i
```
a browser will open a tab in `localhost:3000`

## technologies used
 - react 
 - redux 
 - react create app
 - netlify lambda
 - featherJs
 - nedb
 - semantic Ui

## data layer (editing data)
 - i decided to use nedb in memory database and featherjs for exposing as an REST API the end points
 - you can edit `./functions/app/data/data.json` using the valid data types and schema. this will allow you to add/edit the exisiting data
 - you might need to restart the server in order to get your feeding the app with the new data

# dependencies
- nodeJs `^ v13.9.0`
- npm `^ 6.13.7`
