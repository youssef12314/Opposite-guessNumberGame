window.addEventListener("load", start);


function generateRandomNumber(){

    const randomNumber=(Math.floor(Math.random()*100)+1);

    const resultElement = document.getElementById("result");
      resultElement.textContent = `Is ${randomNumber} your number?`;

      const generateButton = document.getElementById("generateButton");
      generateButton.style.display = "none";

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
  







