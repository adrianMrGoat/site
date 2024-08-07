document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');

    const movies = [
        { title: 'Inception', poster: 'https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
        { title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
        { title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
        { title: 'The Matrix', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
        { title: 'Pulp Fiction', poster: 'https://image.tmdb.org/t/p/w200/dM2w364MScsjFf8pfMbaWUcWrR.jpg' }
    ];

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.poster;

        movieDiv.appendChild(moviePoster);
        movieDiv.appendChild(movieTitle);
        movieList.appendChild(movieDiv);
    });
});
