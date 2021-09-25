NOTE : Post deployment, Google Chrome is showing "Deceptive site ahead" while trying to view deployed website. Since this is a Netflix clone, Google thought it as a phishing site(mainly because of the created url). Please click on the "Details" button and then click on "visit this unsafe site" link. I can guarantee there wont be any security threat to your system. Sorry for the inconvenience. 

Netflix-App Demo url : https://netflix-app-9bdb4.web.app

Netflix-App walkthrough : https://drive.google.com/drive/u/1/folders/1BhFBOZ_zfRTpRE3LASpa4ZxFXdsZU9hI

This is a Netflix web clone , which is a react firebase app, which shows libraries of movies & documentaries(data got through tmdb - https://www.themoviedb.org/), where you can get information of movies & documentaries and can also watch its trailer. You need to login into this website in order to access it. Its also has subcription model, where you can subcribe for a plan which renews every month. 

its build using : 
* Front-end : react, react-dom, react-router-dom, react-redux
* redux for storing data of users and user's subscription data.
* Api calls are made using axios.
* Backend and Database is created from firebase.
* showcasing photos of movie casts done using react-alice-carousel
* Billing is done using stripe/stripe.js

Main features of this web application are : 

1. User authentication with e-mail via firebase Auth i.e Sign-up, Sign-in & Sign-out functionality.
2. Getting data from tmdb(https://www.themoviedb.org/) through API key provided by the site. Data is recieved through api calls via axios.
3. Creating backend and databse using firebase.
4. Home page has movies sorted based on genres
5. Accessing details of movies & documentaries, which includes movie info, rating, movie casts etc. and can also able to watch its trailer. 
6. Billing functionality using stripe.
