var readUserInput = require('readline-sync');
var score = 0;
var highScore = 5;


console.log(" ---- Welcome to Neog levelzer0 Quiz 1 ---- ");
var name = readUserInput.question("May I know your ? ");
console.log("Welcome " + name + ", glad you finally started ..!! ");
console.log("                                      ");
console.log("Let's play a simple quiz ' Know Me ' ");
console.log("                                      ");
console.log("High Score : " + highScore + " Your Score : " + score);
console.log("                                      ");
console.log("Select an option: a/b/c/d");
console.log("                                      ");

var questions = [{
  quest: `Which is my home town ?
  a: Pune
  b: Lonavala
  c: Mumbai
  d: Hyderabad 
  Your Answer: `,
  ans: "b",
  correctAns: " Lonavala "
}, {
  quest: `Which is my favourite sport ?
  a: Cricket
  b: Table Tennis
  c: Badminton
  d: Football 
  Your Answer: `,
  ans: "d",
  correctAns: "Football"
}, {
  quest: `Who is my favourite player?
  a: Ronaldo
  b: Messi
  c: Neymar
  d: Rooney 
  Your Answer: `,
  ans: "a",
  correctAns: "Ronaldo"
}, {
  quest: `What do I the love most ?
  a: Food
  b: Video games
  c: Religion
  d: India
  Your Answer:  `,
  ans: "d",
  correctAns: "India"
}, {
  quest: `What is the name of my Pet? 
  a: Simba
  b: Cookie
  c: Titan
  d: Spike
  Your Answer: `,
  ans: "c",
  correctAns: "Titan"
}];

function gameOn() {
  for (let i = 0; i < questions.length; i++) {
    var userAnswer = readUserInput.question(questions[i].quest);
    if (questions[i].ans.toLowerCase() == userAnswer.toLowerCase()) {
      score++;
      console.log(" That's Correct ..!! Score is : " + score);
    }
    else {
      console.log("That's wrong .. Correct Answer is : " + questions[i].correctAns + " Score is : " + score)
    }
  }
}

gameOn();

console.log("                                      ");
console.log("High Score : " + highScore + " Your Score : " + score);

