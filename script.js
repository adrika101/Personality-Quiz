/*Add your JavaScript here*/
var arcticScore = 0; //store arctic score//
var tropicalScore = 0; //store tropical score//
var questionCount = 0 ; //store the number of answers clicked on//

//store the HTML elements using the DOM//
var result = document.getElementById("result");

var answer = document.getElementById("answer");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//listen for click on answer buttons and call functions if clicked//
restart.addEventListener("click", restartButton);

answer.addEventListener("click", display);

//q1//
q1a1.addEventListener("click", tropical);
q1a1.addEventListener("click", () => q1a2.disabled=true);

q1a2.addEventListener("click", arctic);
q1a2.addEventListener("click", () => q1a1.disabled=true);

//q2//
q2a1.addEventListener("click", tropical);
q2a1.addEventListener("click", () => q2a2.disabled=true);

q2a2.addEventListener("click", arctic);
q2a2.addEventListener("click", () => q2a1.disabled=true);

//q3//
q3a1.addEventListener("click", arctic);
q3a1.addEventListener("click", () => q3a2.disabled=true);

q3a2.addEventListener("click", tropical);
q3a2.addEventListener("click", () => q3a1.disabled=true);

//q4//
q4a1.addEventListener("click", tropical);
q4a1.addEventListener("click", () => q4a2.disabled=true);

q4a2.addEventListener("click", arctic);
q4a2.addEventListener("click", () => q4a1.disabled=true);

//q5//
q5a1.addEventListener("click", arctic);
q5a1.addEventListener("click", () => q5a2.disabled=true);

q5a2.addEventListener("click", tropical);
q5a2.addEventListener("click", () => q5a1.disabled=true);


//track arctic score and question count//
function arctic() {
  arcticScore += 1;
  questionCount += 1;

  console.log("questionCount=" + questionCount + " arcticScore=" + arcticScore);

  //conditional statement//
  if(questionCount == 5){
  console.log("The quiz is done!");

    //insert function to update quiz//
    updateResult();
  }
}

//track tropical score and question count//
function tropical() {
  tropicalScore += 1;
  questionCount += 1;

  console.log("questionCount=" + questionCount + " tropicalScore=" + tropicalScore);
  
//conditional statement//
  if(questionCount == 5){
  console.log("The quiz is done!");
    
    //insert function to update quiz//
    updateResult();
  }
}

//answer button for end of quiz//

//update quiz result function//
function updateResult(){
    if (tropicalScore >= 3){
      //result
      result.innerHTML = "You should...";
    console.log("You should go on a Tropical Vacation!");
    } else if (arcticScore >= 3){
      //result
      result.innerHTML = "You should...";
    console.log("You should go on an Arctic Vacation!");
    }
}

function display(){ if (tropicalScore >= 3){
      //result
      result.innerHTML = "You should go on a Tropical Vacation!";
    console.log("You should go on a Tropical Vacation!");
    } else if (arcticScore >= 3){
      //result
      result.innerHTML = "You should go on an Arctic Vacation!";
    console.log("You should go on an Arctic Vacation!");
    }
                  }
  
//restart button function//
function restartButton() {
  document.getElementById("result").innerHTML="You should..."
  tropicalScore=0;
  arcticScore=0;
  questionCount=0;
  console.log("questionCount=" + questionCount);
  console.log("tropicalScore=" + tropicalScore);
  console.log("arcticScore=" + arcticScore);

  //enable disabled buttons//
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
}
