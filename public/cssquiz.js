var questions = [
    {
      question: "Which of the following tag is used to embed css in html page?",
      option1: "<css>",
      option2: "<script>",
      option3: "<style>",
      corrAnswer: "<style>",
    },
    {
      question: "Which of the following CSS selectors are used to specify a group of elements?",
      option1: "tag",
      option2: "id",
      option3: "class",
      corrAnswer: "class",
    },
    {
      question: "Which of the following CSS framework is used to create a responsive design?",
      option1: "django",
      option2: "larawell",
      option3: "bootstrap",
      corrAnswer: "bootstrap",
    },
    {
      question: "Which of the following CSS property is used to make the text bold?",
      option1: "text-decoration: bold",
      option2: "font-weight: bold",
      option3: "font-style: bold",
      corrAnswer: "font-weight: bold",
    },
    {
      question: "Which of the following CSS style property is used to specify an italic text?",
      option1: "style",
      option2: "font",
      option3: "font-style",
      corrAnswer: "font-style",
    },
    {
      question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
      option1: "<link rel=”stylesheet” href=”style.css” />",
      option2: "<link rel=”stylesheet” src=”style.css” />",
      option3: "<style rel=”stylesheet” link=”style.css” />",
      corrAnswer: "<link rel=”stylesheet” href=”style.css” />",
    },
    {
      question: "Which of the following function defines a linear gradient as a CSS image?",
      option1: "gradient()",
      option2: "linear-gradient()",
      option3: "grayscale()",
      corrAnswer: "linear-gradient()",
    },
    {
      question: "Which of the following CSS property can be used to set the image as a border instead of the border style?",
      option1: "background-image",
      option2: "border-image-source",
      option3: "border-image",
      corrAnswer: "border-image-source",
    },
    {
      question: "Which of the following CSS property sets the font size of text?",
      option1: "font-size",
      option2: "size",
      option3: "text-size",
      corrAnswer: "font-size",
    },
    {
      question: "Which of the following is not the property of the CSS box model?",
      option1: "color",
      option2: "margin",
      option3: "height",
      corrAnswer: "color",
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