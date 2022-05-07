// Added initial block variables to the DOM to run the game

/**
 * Set a variable for counter
 * Set two varibles to hold first and second selection
 */

let counter = 0;
let firstSelection = "";
let secondSelection = "";

// Added function for the game reset button

restartGameButton = document.getElementById("restartGameButton");

restartGameButton.addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    location.reload("restartGameButton");
}

// Set a block variable to sellect all the cards 

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");

        /**
         * Set the counter for firstSelection and secondSelection  
         * Added condition to check matching cards
         * Added array to hold checked correct and incorrect cards
         * Added a class to shake incorrect cards
         * setTimeout function for incorrect cards
         */

        if (counter === 0) {
            firstSelection = card.getAttribute("id");
            counter++;
        } else {
            secondSelection = card.getAttribute("id");
            counter = 0;

            if (firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(".card[id='" + firstSelection + "']");

                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
            } else {
                const incorrectCards = document.querySelectorAll(".card.clicked");

                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

                setTimeout(() => {
                    incorrectCards[0].classList.remove("shake");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("shake");
                    incorrectCards[1].classList.remove("clicked");
                }, 500);
            }
        }

    });
});