
function getQuestion() {
  let userQuestion = document.getElementById("input").value;
  document.getElementById("button").classList.add("over11");

  if (userQuestion.trim().length === 0 || userQuestion === "") {
      document.getElementById("input").classList.add('error')
      document.getElementById("input-error").innerHTML = 'Please enter a question to spin the ball'

  } else {
    rollBall();
    document.getElementById("input-error").innerHTML = ''

    return userQuestion;
  }
}

function rollBall() {
    animateBall();
    

  document.getElementById("result").innerHTML = "";
  getBallResponse();
}

function animateBall() {
  document.getElementById("ball").classList.add("over");
  setTimeout(function () {
    document.getElementById("ball").classList.remove("over");
  }, 2000);
}

function getBallResponse() {
  let randomNumber = Math.floor(Math.random() * 8);
  let result = "";

  switch (randomNumber) {
    case 1:
      result = "It is certain";
      break;
    case 2:
      result = "It is decidedly so";
      break;
    case 3:
      result = "Reply hazy try again";
      break;
    case 4:
      result = "Cannot predict now";
      break;
    case 5:
      result = "Do not count on it";
      break;
    case 6:
      result = "My sources say no";
      break;
    case 7:
      result = "Outlook not so good";
      break;
    case 8:
      result = "Signs point to yes";
      break;
  }

  setTimeout(function () {
    document.getElementById("result").innerHTML = result;
    document.getElementById("input").value = "";
  }, 2000);
}
