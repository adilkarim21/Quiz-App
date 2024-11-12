var questions = [
    {
      question: "What does HTML stand for?",
      option1: "Hyperlinks and Text Markup Language",
      option2: "Home Tool Markup Language",
      option3: "Hyper Text Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      option1: "<h6>",
      option2: "<heading>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "<break>",
      option2: "<lb>",
      option3: "<br>",
      corrAnswer: "<br>",
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      option1: "<em>",
      option2: "<i>",
      option3: "<italic>",
      corrAnswer: "<em>",
    },
    {
      question: "Which of the following tags do not require a terminator?",
      option1: "<u>",
      option2: "<br>",
      option3: "<b>",
      corrAnswer: "<br>",
    },
    {
      question: "There are _____ level of heading in html",
      option1: "four",
      option2: "five",
      option3: "six",
      corrAnswer: "six",
    },
    {
      question: "To get the ordered list we use ",
      option1: "<h1>",
      option2: "<ul>",
      option3: "<ol>",
      corrAnswer: "<ol>",
    },
    {
      question: "_____ tag is used before beginning of the paragraph text",
      option1: "<textarea>",
      option2: "<sup>",
      option3: "<p>",
      corrAnswer: "<p>",
    },
    {
      question: "What is the correct syntax of doctype in HTML5?",
      option1: "</doctype html>",
      option2: "<doctype html>",
      option3: "<!doctype html>",
      corrAnswer: "<!doctype html>",
    },
    {
      question: "How do we write comments in HTML?",
      option1: "<!……>",
      option2: "</…….>",
      option3: "<…….!>",
      corrAnswer: "<!……>",
    },
  ];

  
var button = document.getElementById('btn')  
var question = document.getElementById('ques');
var option1 = document.getElementById('opt1');
var option2 = document.getElementById('opt2');
var option3 = document.getElementById('opt3');
var index = 0;
score = 0;
var sec = 59;
var min = 1;

var timerElement = document.getElementById("timer");

function timer() {
  timerElement.innerText = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;

    if (min < 0) {
      min = 1;
      sec = 59;
      nextQuestion();
    }
  }
}

setInterval(timer,100);




function nextQuestion() {
    var options = document.getElementsByClassName("options")

    for ( var i = 0 ; i < options.length ; i++ ) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index-1][`option${selectedOption}`];
        var correctAnswer = questions[index-1]['corrAnswer'];
        
          if ( getOption === correctAnswer ) {
            score++;
          }

          console.log(getOption);

      }

      options[i].checked = false;
    }

    button.disabled = true;

    if (index > questions.length -1) {
        if (score > 5) {
            Swal.fire({
                title: "Good job!",
                text: `Your score is ${((score / questions.length) * 100).toFixed(2)}%`,
                icon: "success"
              });
        }
        else {
            Swal.fire({
                title: "Oops!",
                text: `Your score is ${((score / questions.length) * 100).toFixed(2)}%`,
                icon: "error"
              });
        }
    }
    else {
        question.innerText = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index++
    }

    min = 1;
    sec = 59;

}


function clicked() {
  button.disabled = false;
}