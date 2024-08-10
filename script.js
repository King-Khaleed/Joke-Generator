const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const getJoke = () => {
    fetch(url)
        .then(response => response.json())
        .then(item => {
            if (item.type === 'single') {
                // For jokes of type 'single', where joke is a single line
                jokeContainer.textContent = item.joke;
            } else {
                // For jokes of type 'twopart', where joke has a setup and a delivery
                jokeContainer.textContent = `${item.setup} - ${item.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeContainer.textContent = 'Oops! Something went wrong.';
        });
};

btn.addEventListener("click", getJoke);
getJoke();  // Optionally, you can remove this line if you don't want a joke on page load
