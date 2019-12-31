## About

React app with Express server, connecting to MongoDB to retrieve user data that is displayed in front end in the form of a filterable table. 

### To run the app

Instead of Docker, please run locally:

- root: `npm install` --> `npm run dev`
- to create a mongoDB collection and to run the seed-file: run `mongo` --> `node bin/seeds.js`
- in /client: `npm install` --> `npm start` --> opens on localhost:3000

If the app is running correctly, you should see user data table and a search bar when launching the app on localhost:3000.
