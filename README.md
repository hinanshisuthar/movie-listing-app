# Movie Listing App

![image](https://user-images.githubusercontent.com/88201664/213223985-8ce1dae6-3f27-4b47-929e-621f674eb911.png)

Features: 
- list movies from the API provided.
- search a movie/series with its name and with various other fields like year, language
- The search triggers without entering or search button with a delay of 2 seconds.
- add, view, and remove movies to favorites. (used Redux)
- see list of all movies added to favorites
- responsive

Setup Instructions: 
#### Step 1 ####
Install [NodeJs](https://nodejs.org/en/)(if not already installed)

#### Step 2 ####
Clone dev branch of this repo to local using:
   
     git clone https://github.com/hinanshisuthar/movie-listing-app.git -b dev

#### Step 3 ####
Go into the project folder
 
     cd project-name 
     
#### Step 4 ####
Install all the npm packages

     npm install 
     
#### Step 5 ####
Run the application using:
   
     npm start 
     
The application runs on **localhost:3000**

Code Architechture description:

<pre>
MOVIE-LISTING-APP
.
├── node_modules/
│   └── ........
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── favorites/
│   │   │   ├── FavCard.jsx
│   │   │   ├── favorites.css
│   │   │   └── Favorites.jsx
│   │   ├── movie listing/
│   │   │   ├── movieList.css
│   │   │   └── movieList.jsx
│   │   └── navbar/
│   │       ├── navbar.css
│   │       └── Navbar.jsx
│   ├── features/
│   │   └── movieSlice.js
│   ├── pages/
│   │   └── Home/
│   │       ├── home.css
│   │       └── Home.jsx
│   ├── services/
│   │   └── movieService.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── store.js
├── gitignore
├── package-lock.json
├── package.json
└── README.md
</pre>
