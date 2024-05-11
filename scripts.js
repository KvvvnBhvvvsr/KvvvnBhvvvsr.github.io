const movie_names = new Map();

var gameRunning = false;
let score = 0;
let movieCount = 0;
var max_movie_count = 4;

// document.getElementById("score").innerHTML = 0;
// Map: movie : (number, review page, poster)
const movie1array = [1, "https://everynoise.com/engenremap.html"];

movie_names.set("the good, the bad, and the ugly", movie1array);
movie_names.set("rango", movie1array);
movie_names.set("taxi driver", movie1array);
movie_names.set("next gen", movie1array);

// TO FIND A MOVIE
console.log(movie_names.get("the good, the bad, and the ugly")[0]);

for (let i = 0; i < max_movie_count; i++) {
    let movie_array = [i, "link goes here"];
    movie_names.set("title" + 1, movie_array);
}

function runGame() {
    console.log("Game Started!");
    gameRunning = true;
    score = 0;
    runTimer();
    const guessbox = document.getElementById('guessbox');
    guessbox.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if (gameRunning) {
            console.log('Enter key pressed: ' + guessbox.value);
            movieNamed(guessbox.value);
        }
      }
    });
    const submit = document.getElementById('submit-guess');
    submit.addEventListener('click', function() {
        if (gameRunning) {
            movieNamed(guessbox.value);
        }
    });
}

var timer; 
var timeLeft = 60; // seconds
var timeSinceLastGuess = 0;

// What to do when the timer runs out
function timeOut() {
    // This cancels the setInterval, so the updateTimer stops getting called
    clearInterval(timer);
    endGame();
  
    // re-show the button, so they can start it again
    // $('#playAgainButton').show();
}

function updateTimer() {
    timeLeft = timeLeft - 1;
    timeSinceLastGuess++;
    if(timeLeft >= 0) {
        // $('#timer').html(timeLeft);
        document.getElementById('timer').innerHTML = "Time: " + timeLeft;
    } else {
        timeOut();
    }
}

// The button has an on-click event handler that calls this
function runTimer() {
    if (gameRunning) {console.log("Already running.")
        return;
    }
    gameRunning = true;
    timeLeft = 60;
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    timer = setInterval(updateTimer, 1000);

    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();
  
    // We don't want the to be able to restart the timer while it is running,
    // so hide the button.
    // $('#playAgainButton').hide();
}

function movieNamed(guess) {
    // Check the guess against the list
    // If guess is correct, add to score, add to timer, call displayMovie, increment movieCount
    // If guess is incorrect, send wrong message
    console.log("Guess: " + guess);

    // Check the guess
    if (checkTitle(guess)) {
        // Clear correct guess from the input field
        guessbox.value = "";

        if (timeSinceLastGuess <= 60) {
            score += 70 - timeSinceLastGuess;
        } else {
            score += 10;
        }

        console.log("Correct guess! " + guess);
        // Update the score and time
        document.getElementById("score").innerHTML = "Score: " + score;
        timeLeft += 10;
        timeSinceLastGuess = 0;
    }
}

function checkTitle(title) {
    console.log("checking movie...");
    return movie_names.has(title.toLowerCase());

    // Consider implementing fuzzy string matching
}

function displayMovie(movie_name) {
    // Display the movie poster corresponding to the movie
    // Fade poster out quickly
}

function endGame() {
    gameRunning = false;
    // Call if timer reaches 0 or if movieCount reached 124 (total)
}