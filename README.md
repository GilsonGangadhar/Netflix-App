NOTE : Post deployment, Google Chrome is showing "Deceptive site ahead" while trying to view deployed website. Since this is a Netflix clone, Google thinks this as a phishing site (mainly because of the created url). Please click on the "Details" button and then click on "visit this unsafe site" link. I can guarantee there wont be any security threat to your system. Sorry for the inconvenience. 

Netflix-App walkthrough : https://drive.google.com/drive/u/1/folders/1BhFBOZ_zfRTpRE3LASpa4ZxFXdsZU9hI

Netflix-App Demo url : https://netflix-app-9bdb4.web.app

This is a Netflix web clone,  a react firebase app. Here, a user can register and see a variety of movies & documentaries which are categorised by respective genres. You can also get a detailed information of each movie/documentary. Also, users can subscribe to the services via our stripe subscription model. 

its build using : 
* Front-end : react, react-dom, react-router-dom, react-redux
* redux for storing data of users and user's subscription data.
* Api calls are made using axios.
* Backend and Database is setup with firebase.
* showcasing photos of movie casts done using react-alice-carousel
* Billing is done using stripe/stripe.js

Main features of this web application are : 

1. User authentication with e-mail via firebase Auth i.e Sign-up, Sign-in & Sign-out functionality.
2. Getting data from tmdb(https://www.themoviedb.org/) through API key provided by the site. We have made use of multiple APIs to render data on the UI.
3. Creating backend and database using firebase.
4. Home page has variety of movies/documentaries sorted based on genres.
5. Access detailed info of each movie/documentary, which includes movie info, rating, movie casts etc. where you have an option to watch the trailer too. 
6. Billing functionality using stripe where user can subscribe to the services.
