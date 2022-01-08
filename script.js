const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const opt_sec = document.getElementById("option_sec");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");

const a1 = document.getElementById("add1");
// const a2 = document.getElementById('add2')
// const r = document.getElementById('result')

opt1.addEventListener("click", addingNum);
opt2.addEventListener("click", addingNum);
opt3.addEventListener("click", addingNum);

add.addEventListener("click", addingNum);

function addingNum() {
  let num1;
  let num2;
  let result;
  var switchAnswers = [];

  for (let i = 0; i <= 100; i++) {
    num1 = Math.round(Math.random(i) * 100);
    num2 = Math.round(Math.random(i) * 100);
   var opt = Math.round(Math.random(i) * 100);
    var opt2_1 = Math.round(Math.random(i) * 100);
  }

  result = num1 + num2;

  var allAns = [opt, opt2_1, result];

  for (i = allAns.length; i--;){
    switchAnswers.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };


  a1.innerHTML = num1 + " + " + num2 + " = " + result;
  opt1.innerHTML = switchAnswers[0];
  opt2.innerHTML = switchAnswers[1];
  opt3.innerHTML = switchAnswers[2];
}

  

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     
//       var j = Math.floor(Math.random() * (i + 1));
//       
//       var temp = board[i][j];
//       board[i][j] = board[j][j1];
//       board[j][j1] = temp;
//   }
//   return array;
// 
// }




// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function cellClick(event){
//     const divClick = event.target
//     if(divClick === Result){
//         return addingNum()
//     }else{
//         alert('wrong')
//     }
// }
