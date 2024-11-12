var questions = [
    {
      question: "JavaScript File Has An Extension of:",
      option1: ".java",
      option2: ".js",
      option3: ".javascript",
      corrAnswer: ".js",
    },
    {
      question: "The ____________ Tag is used To Give Heading To The Table.",
      option1: "Td",
      option2: "Th",
      option3: "Caption",
      corrAnswer: "Caption",
    },
    {
      question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
      option1: "Is not a null",
      option2: "Is not a number",
      option3: "Is not a new object",
      corrAnswer: "Is not a number",
    },
    {
      question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
      option1: "Alert()",
      option2: "Prompt()",
      option3: "Msg()",
      corrAnswer: "Prompt()",
    },
    {
      question: "Event is Used To Check An Empty Text Box:",
      option1: "Onclick()",
      option2: "OnFocus()",
      option3: "OnBlur()",
      corrAnswer: "OnBlur()",
    },
    {
      question: "Method Prompt() Contain ........Number of Parameters.",
      option1: "One",
      option2: "Two",
      option3: "Three",
      corrAnswer: "Two",
    },
    {
      question: "GetMonth() returns The Month as:",
      option1: "Int",
      option2: "Float",
      option3: "Char",
      corrAnswer: "Int",
    },
    {
      question: "If Button is clicked .......Event Handler is invoked.",
      option1: "OnSubmit()",
      option2: "Onclick()",
      option3: "OnLoad()",
      corrAnswer: "Onclick()",
    },
    {
      question: "A Function Associated With An object is Called:",
      option1: "Function",
      option2: "Method",
      option3: "Link",
      corrAnswer: "Method",
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      option1: "Js",
      option2: "JavaScript",
      option3: "Script",
      corrAnswer: "Script",
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