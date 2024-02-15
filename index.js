const jokes = require('./jokes/jokes.json'); // Supposons que vous ayez un fichier JSON avec des blagues

function getRandomJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
}

console.log(getRandomJoke());
