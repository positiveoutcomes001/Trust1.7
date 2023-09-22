//Timer
const timeout = setTimeout(timer, 7000);

function timer() {
    window.location.href = "timeOutThree.html"
  }
  
  
  //Answer 

  function getAnswer() {   
    if(document.getElementById('1').checked){   
        var answer = '1'}
        else if (document.getElementById('2').checked){
     answer = '2'}
     else {answer = undefined}

  sessionStorage.setItem('answer', answer)
  }

  var answerA = sessionStorage.getItem('answer') 

  function displayAnswer(){
    document.getElementById("answer").innerHTML = answerA
  }

  //Display Timer 

  function time(){
    var sec = 5;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

