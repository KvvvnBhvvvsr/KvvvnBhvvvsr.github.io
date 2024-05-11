const movie_names = new Map();

var gameRunning = false;
let score = 0;
let movieCount = 0;
var max_movie_count = 4;
var guess_list = "";

// document.getElementById("score").innerHTML = 0;
// Map: movie : (number, review page, poster)
const movie1array = [1, "https://everynoise.com/engenremap.html"];

movie_names.set("the good, the bad, and the ugly", movie1array);
movie_names.set("rango", movie1array);
movie_names.set("taxi driver", movie1array);
movie_names.set("next gen", movie1array);

const movie_set = new Set();
{
    movie_set.add("rango");
movie_set.add("the good the bad and the ugly");
movie_set.add("taxi driver");
movie_set.add("next gen");
movie_set.add("a silent voice");
movie_set.add("the main event");
movie_set.add("inception");
movie_set.add("inglorious basterds");
movie_set.add("12 angry men");
movie_set.add("3 idiots");
movie_set.add("i want to eat your pancreas");
movie_set.add("velocipastor");
movie_set.add("american history x");
movie_set.add("scott pilgrim vs the world");
movie_set.add("who killed captain alex");
movie_set.add("the thing");
movie_set.add("kubo and the two strings");
movie_set.add("batman under the red hood");
movie_set.add("mad monkey kung fu");
movie_set.add("good will hunting");
movie_set.add("no country for old men");
movie_set.add("memories of murder");
movie_set.add("stardust");
movie_set.add("goldeneye");
movie_set.add("the shining");
movie_set.add("airplane");
movie_set.add("eternal sunshine of the spotless mind");
movie_set.add("the aeronauts");
movie_set.add("millionaires express");
movie_set.add("baby driver");
movie_set.add("killing them softly");
movie_set.add("election");
movie_set.add("knives out");
movie_set.add("the platform");
movie_set.add("almost famous");
movie_set.add("one flew over the cuckoos nest");
movie_set.add("scream");
movie_set.add("dinner for schmucks");
movie_set.add("whiplash");
movie_set.add("drive");
movie_set.add("goodfellas");
movie_set.add("whats eating gilbert grape");
movie_set.add("shin godzilla");
movie_set.add("shutter island");
movie_set.add("noises off");
movie_set.add("the truman show");
movie_set.add("animal farm");
movie_set.add("crazy stupid love");
movie_set.add("chinatown");
movie_set.add("your name");
movie_set.add("ran");
movie_set.add("due date");
movie_set.add("a beautiful mind");
movie_set.add("a series of unfortunate events");
movie_set.add("raging bull");
movie_set.add("the matrix");
movie_set.add("the silence of the lambs");
movie_set.add("ip man");
movie_set.add("rudolph the red nosed reindeer");
movie_set.add("jingle all the way");
movie_set.add("the year without santa claus");
movie_set.add("christmas in new york");
movie_set.add("tiktok cringe");
movie_set.add("the grand budapest hotel");
movie_set.add("the polar express");
movie_set.add("tick tick boom");
movie_set.add("interstellar");
movie_set.add("napoleon dynamite");
movie_set.add("spirited away");
movie_set.add("the adam project");
movie_set.add("indiana jones and the last crusade");
movie_set.add("diary of a wimpy kid dog days");
movie_set.add("meet the robinsons");
movie_set.add("house");
movie_set.add("adaptation");
movie_set.add("the mummy returns");
movie_set.add("real steel");
movie_set.add("spiderhead");
movie_set.add("hotel transylvania");
movie_set.add("my cousin vinny");
movie_set.add("scooby doo on zombie island");
movie_set.add("before sunrise");
movie_set.add("uncle boonmee who can recall his past lives");
movie_set.add("the plague dogs");
movie_set.add("the secret life of walter mitty");
movie_set.add("the big lebowsky");
movie_set.add("the exorcist");
movie_set.add("scrooge a christmas carol");
movie_set.add("die hard");
movie_set.add("the magic school bus recycling special");
movie_set.add("who killed santa");
movie_set.add("klaus");
movie_set.add("silent night deadly night part 2");
movie_set.add("the royal tenenbaums");
movie_set.add("glass onion");
movie_set.add("redline");
movie_set.add("manchester by the sea");
movie_set.add("benjamin diner");
movie_set.add("fred the movie");
movie_set.add("the simpsons movie");
movie_set.add("jaws 3d");
movie_set.add("sunset boulevard");
movie_set.add("spiderman across the spiderverse");
movie_set.add("oldboy");
movie_set.add("asteroid city");
movie_set.add("her");
movie_set.add("nimona");
movie_set.add("the social network");
movie_set.add("rrr");
movie_set.add("the nice guys");
movie_set.add("suzume");
movie_set.add("the apartment");
movie_set.add("millenium actress");
movie_set.add("here comes the boom");
movie_set.add("final fantasy vii advent children");
movie_set.add("ghidorah the three headed monster");
movie_set.add("arthur and the invisibles");
movie_set.add("dream home");
movie_set.add("shark tale");
movie_set.add("the hunchback of notre dame");
movie_set.add("im thinking of ending things");
movie_set.add("mind game");
movie_set.add("how to blow up a pipeline");
movie_set.add("the vvitch");
}




// TO FIND A MOVIE
console.log(movie_names.get("the good, the bad, and the ugly")[0]);

for (let i = 0; i < max_movie_count; i++) {
    let movie_array = [i, "link goes here"];
    movie_names.set("title" + 1, movie_array);
}

function runGame() {
    console.log("Game Started!");
    score = 0;
    movieCount = 0;
    runTimer();
    guess_list = "";
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
        timeLeft += 6;
        movieCount++;
        guess_list += "\n" + guess + ", ";
        document.getElementById("list").innerHTML = "Movies Named: " + movieCount + "/124 \n" + guess_list;
        console.log(guess_list);
        timeSinceLastGuess = 0;
    }
}

function checkTitle(title) {
    console.log("checking movie...");
    // return movie_names.has(title.toLowerCase());
    return movie_set.has(title.toLowerCase());

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