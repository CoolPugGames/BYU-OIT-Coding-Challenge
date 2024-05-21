# BYU-OIT-Coding-Challenge
## a mystery web app with node.js and vue.js
author: Brandon Arnold
Date: May 21, 2024

To use this project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to start the back end server:

```bash
    cd ../webservice
    node app.js
```

then start the front end server:

```bash
    cd ../webapp
    npm run serve
```
You might need to run:
```npm install```
in both directories beforehand.

My TMDB API Key is stored in a .env file in the /webservice directory, but is not included in github for security. Another user would need to use their own API key.


##ToDoList

I ran out of time before I could do everything I wanted with .css styling. I would change the following:
1. I don't like how small the images are compared to the title of the movie. I would make the posters bigger (when width > 1280px) and title font smaller.
2. It won't look good on a phone at the moment, probably cutting off the rightmost column of movies. I would change it to be more responsive to narrow/vertical screens, for example:
    A. Make titles smaller font
    B. Only show 2 columns of movies
3. I don't like how small the TMDB logo is at the top. It was the last thing I added and didn't have time to tweak the size.
4. I initially wanted the widescreen version of the page to have the search input and button on the left side of the screen, and the results displayed on the right (but then displayed below the search on a vertical screen). I spent way too long trying to get it to look right, but with time constraints had to give up and just have the results below the search.
5. It would be more useful if a user could click on the results (title or image) and that would take them to that movie's TMDB page.

I'm adding this ToDoList well after the 4 hour limit, so don't disqualify me just for that, please!