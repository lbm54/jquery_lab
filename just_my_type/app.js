let hide = str => $(`${str}`).css("visibility", "hidden");
let show = str => $(`${str}`).css("visibility", "visible");
let highlightedElement = null;
let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
let whichSentence = 0;
let whichChar;
let yellowBlockPosition;
let numberOfWords = 0;
let numberOfMistakes = 0;
let started = false;
let startTime = null;

let removeHighlight = () => {
  if (highlightedElement) {
    highlightedElement.removeClass("highlight");
    highlightedElement = null;
  }
};

let start = () => {
  console.log("starting");
  started = true;
  startTime = new Date();
};

let setupSentence = () => {
  $("#sentence").empty();
  $("#sentence").append(sentences[whichSentence]);
  $(`#${sentences[whichSentence].charCodeAt(whichChar)}`).addClass("prompt");
  whichChar = 0;
  yellowBlockPosition = 20;
  $("#target-letter").empty();
  $("#target-letter").append(`${sentences[whichSentence].charAt(whichChar)}`);
  $("#yellow-block").css("left", `${yellowBlockPosition}px`);
  $("#feedback").empty();
};

$(document).ready(function() {
  hide("#keyboard-upper-container");
  setupSentence();
  // $("#sentence").append(sentences[whichSentence]);
  // $(`#${sentences[whichSentence].charCodeAt(whichChar)}`).addClass("prompt");
  // $(`#target-letter`).append(`${sentences[whichSentence].charAt(whichChar)}`);
  $(document).on("keypress keydown keyup", function(e) {
    if (!started) start();
    if (e.type === "keyup") {
      if (e.which === 16) {
        hide("#keyboard-upper-container");
        show("#keyboard-lower-container");
      }
      removeHighlight();

      //have to do keydown because keypress doesn't seem to register shift
    } else if (e.type === "keydown") {
      if (e.which === 16) {
        hide("#keyboard-lower-container");
        show("#keyboard-upper-container");
      }
    } else if (e.type === "keypress") {
      //just to be sure
      removeHighlight();
      highlightedElement = $(`#${e.which}`);
      $(highlightedElement).addClass("highlight");

      //if keypress matches the current character in the current sentence, remove prompt on that char
      //move the current char to the next one, and move the yellow block over some pixels
      // and if you are at the end of the sentence, go to the next one
      if (e.which === sentences[whichSentence].charCodeAt(whichChar)) {
        $("#feedback").empty();
        $("<span class='glyphicon glyphicon-ok'></span>").appendTo("#feedback");
        $(`#${sentences[whichSentence].charCodeAt(whichChar)}`).removeClass(
          "prompt"
        );
        whichChar++;
        yellowBlockPosition += 17.5;

        //at the end of the sentence
        if (whichChar === sentences[whichSentence].length) {
          whichSentence++;

          //finished the last word of the prior sentence
          numberOfWords++;
          //not at the end of the game
          if (whichSentence < sentences.length) {
            setupSentence();

            //at the end of the game
          } else {
            started = false;
            let endTime = new Date();
            let difference = endTime - startTime;
            let minutes = difference / 1000 / 60;
            let wpm = numberOfWords / minutes - 2 * numberOfMistakes;
            alert(`Finished!  Your wpm is ${wpm}`);
            let playAgain = confirm("Would you like to play again?");
            if (playAgain) {
              whichSentence = 0;
              setupSentence();
            }
          }

          //not at the end of the sentence
        } else {
          $(`#${sentences[whichSentence].charCodeAt(whichChar)}`).addClass(
            "prompt"
          );
          $("#yellow-block").css("left", `${yellowBlockPosition}px`);
          $(`#target-letter`).empty();

          //if there's a space
          if (sentences[whichSentence].charCodeAt(whichChar) === 32) {
            $(`#target-letter`).append("space");
            numberOfWords++;
          } else
            $(`#target-letter`).append(
              `${sentences[whichSentence].charAt(whichChar)}`
            );
        }

        //wrong key enetered
      } else {
        $("#feedback").empty();
        numberOfMistakes++;
        $("<span class='glyphicon glyphicon-remove'></span>").appendTo(
          "#feedback"
        );
      }
    }
  });
});
