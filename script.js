
let lowRange=1;
let highRange=100;
let currentGuess;


function startGame(){
  generateRandomNumber();
}



function generateRandomNumber(){
  currentGuess=Math.floor((lowRange+highRange)/2);
  const resultElement=document.getElementById("result");
  resultElement.textContent=`Is ${currentGuess} your number?`;
}


  function numberCorrect(){
    const correctelement=document.getElementById("correct");
    correctelement.textContent=`i knew that was your number. I was just trolling`
    const optionButtons = document.getElementById("optionButtons");
    optionButtons.style.display = "none";
  }
  
  function hideOptionButtons() {
    const optionButtons = document.getElementById("optionButtons");
    optionButtons.style.display = "none";
  }


  function updateRange(isTooHigh){
    if (isTooHigh && currentGuess > lowRange){
      highRange=currentGuess-1;
    } else if (!isTooHigh && currentGuess < highRange) {
      lowRange=currentGuess+1;
    } else {
      const resultElement=document.getElementById("result");
      resultElement.textContent='I cant go any higher or lower!!';
      return;
    }
    generateRandomNumber();
  }

  function wayTooHigh() {
    updateRange(true);
  }

function wayTooLow() {
    updateRange(false);
}

window.addEventListener("load", startGame);



