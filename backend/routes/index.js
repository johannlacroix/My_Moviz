var express = require('express');
var router = express.Router();



router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWN_API_KEY}`)
        .then(response => response.json())
        .then(receivedMovies => {
            res.json({ movies: receivedMovies });
        })

})


    ;

module.exports = router;
