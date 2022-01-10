// Dom calling all the top nav math option
const bodyc = document.querySelector('body')
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let result; // result is global

// DOM calling all the option
const opt_sec = document.getElementById("option_sec");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

// DOM calling the math question showing box
const a1 = document.getElementById("add1");

//Adding event listener to options
opt1.addEventListener("click", function () {
  if (opt1.innerHTML == result) {
    console.log("correct ans");
    bodyc.style.backgroundColor = 'green';
    addingNum();
  } else {
    console.log("not true");
    bodyc.style.backgroundColor = 'red';
  }
});

opt2.addEventListener("click", function () {
  if (opt2.innerHTML == result) {
    console.log("correct ans");
    bodyc.style.backgroundColor = 'green';
    addingNum();
  } else {
    console.log("not true");
    bodyc.style.backgroundColor = 'red';
  }

  
});



opt3.addEventListener("click", function () {
  if (opt3.innerHTML == result) {
    console.log("correct ans");
    bodyc.style.backgroundColor = 'green';
    addingNum();
  } else {
    console.log("not true");
    bodyc.style.backgroundColor = 'red';
  }

});



//Whenever user choose add it will call adding num function
add.addEventListener("click", addingNum);

function addingNum() {
  let num1; //this will hold random number 1
  let num2; //this will  hold random number 2
  //this will hold result
  var switchAnswers = []; //empty array for random option

  // this for loop will decide to choose number from 1 to 100
  for (let i = 0; i <= 100; i++) {
    num1 = Math.round(Math.random(i) * 100);
    num2 = Math.round(Math.random(i) * 100);
    var opt = Math.round(Math.random(i) * 100);
    var opt2_1 = Math.round(Math.random(i) * 100);
  }

  result = num1 + num2;

  var allAns = [opt, opt2_1, result];

  // This for loop will add the options from allans array to switch ans
  for (i = allAns.length; i--; ) {
    switchAnswers.push(
      allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  a1.innerHTML = num1 + " + " + num2 + " = " + '?';
  opt1.innerHTML = switchAnswers[0];
  opt2.innerHTML = switchAnswers[1];
  opt3.innerHTML = switchAnswers[2];
}
