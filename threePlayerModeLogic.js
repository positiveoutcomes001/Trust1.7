//FORM 

function validateForm() {
  let one = document.forms["threeForm"]["nameOne"].value;
  let two = document.forms["threeForm"]["nameTwo"].value;
  let three = document.forms["threeForm"]["nameThree"].value;
  
  if (one == "" || two=="" || three=="") {
    alert("All names must be filled in!");
    return false;
  } else {startGame()}
}
      function startGame(){
      if(typeof(sessionStorage) != "undefined"){
        sessionStorage.nameOne = document.getElementById("playerOneName").value;
        sessionStorage.nameTwo = document.getElementById("playerTwoName").value;
        sessionStorage.nameThree = document.getElementById("playerThreeName").value;
        
    }
    document.getElementById("fourForm").submit();
  }



//ROUND ONE  



  var players = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree]


var playerOne = players[0]
var playerTwo = players[1]
var playerThree = players[2]


function giveDeviceToPlayerOne(){
  document.getElementById("giveDeviceToP1").innerHTML = "Give Device To " + playerOne
};

function questionOne(){
  document.getElementById("questionOne").innerHTML = playerOne + ' , who do you wish to form an alliance with? '
  document.getElementById("optionTwoLabel").innerHTML = playerTwo
  document.getElementById("optionThreeLabel").innerHTML = playerThree
  };

  function getAnswerOne() {   
    if(document.getElementById('optionTwo').checked){   
        var playerOneChoice = playerTwo}
        else if (document.getElementById('optionThree').checked){
     playerOneChoice= playerThree}

  sessionStorage.setItem('playerOneChoice', playerOneChoice)
  }

  function giveDeviceToPlayerTwo(){
    document.getElementById("giveDeviceToP2").innerHTML = "Give Device To " + playerTwo
  };
  
  function questionTwo(){
    document.getElementById("questionTwo").innerHTML = playerTwo + ' , who do you wish to form an alliance with? '
    document.getElementById("optionFourLabel").innerHTML = playerOne
    document.getElementById("optionFiveLabel").innerHTML = playerThree
    };
  
    function getAnswerTwo() {   
      if(document.getElementById('optionFour').checked){   
          var playerTwoChoice = playerOne}
          else if (document.getElementById('optionFive').checked){
       playerTwoChoice = playerThree}
  
    sessionStorage.setItem('playerTwoChoice', playerTwoChoice)
    }

    function giveDeviceToPlayerThree(){
      document.getElementById("giveDeviceToP3").innerHTML = "Give Device To " + playerThree
    };
    
    function questionThree(){
      document.getElementById("questionThree").innerHTML = playerThree + ' , who do you wish to form an alliance with? '
      document.getElementById("optionSixLabel").innerHTML = playerOne
      document.getElementById("optionSevenLabel").innerHTML = playerTwo 
      };

      function getAnswerThree() {   
        if(document.getElementById('optionSix').checked){   
            var playerThreeChoice = playerOne}
            else if (document.getElementById('optionSeven').checked){
         playerThreeChoice = playerTwo}
    
      sessionStorage.setItem('playerThreeChoice', playerThreeChoice)
      }

 function getRoundOneResults(){
  if(sessionStorage.getItem('playerOneChoice') == playerTwo && sessionStorage.getItem('playerTwoChoice') == playerOne){
    document.getElementById('results').innerHTML =  playerOne + ' and ' + playerTwo + ' have formed an alliance. ' + playerThree + ' is eliminated. Again, depending on what happens ' + playerThree + ' could still win the game. '             
    document.getElementById('resultsA').innerHTML = 'Continue'
    var eliminatedPlayer = playerThree
    var playerOneB = playerOne
    var playerTwoB = playerTwo

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = playerOne + ' and ' + playerThree + ' have formed an alliance. ' + playerTwo + ' is eliminated. Again, depending on what happens ' + playerTwo + ' could still win the game.'
    document.getElementById('resultsA').innerHTML = 'Continue'
    eliminatedPlayer = playerTwo
     playerOneB = playerOne
     playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = playerTwo + ' and ' + playerThree + ' have formed an alliance. ' + playerOne + ' is eliminated. Again, depending on what happens ' + playerOne + ' could still win the game.'  
    document.getElementById('resultsA').innerHTML = 'Continue'
    eliminatedPlayer = playerOne 
    var playerOneB = playerTwo
    var playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerOneChoice') == playerTwo && sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerTwoChoice') == playerOne && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'
  }
  sessionStorage.setItem("eliminatedPlayer", eliminatedPlayer)
  sessionStorage.setItem("playerOneB", playerOneB)
  sessionStorage.setItem("playerTwoB", playerTwoB)
 }


 






//ROUND TW0

var eliminatedPlayer = sessionStorage.getItem("eliminatedPlayer")
var finalistOne = sessionStorage.getItem("playerOneB") 
var finalistTwo = sessionStorage.getItem("playerTwoB") 
var loyality = 'loyality'
var betrayal = 'betrayal'


function giveDeviceToFinalistOne(){
document.getElementById("giveDeviceToF1").innerHTML = 'Give Device To ' + finalistOne
}


function questionFour(){
  document.getElementById('questionFour').innerHTML = finalistOne + " do you wish to remain loyal to " + finalistTwo + ' or betray the alliance?'
  document.getElementById("stayLoyalLabel").innerHTML = 'Stay Loyal'
  document.getElementById("betrayLabel").innerHTML = 'Betray'
}

  
  function getAnswerFour() {   
    if(document.getElementById('stayLoyal').checked){   
        var finalistOneChoice = loyality}
        else if (document.getElementById('betray').checked){
     finalistOneChoice= betrayal}

  sessionStorage.setItem('finalistOneChoice', finalistOneChoice)
  }


  function giveDeviceToFinalistTwo(){
    document.getElementById("giveDeviceToF2").innerHTML = 'Give Device To ' + finalistTwo
    }


  function questionFive(){
    document.getElementById('questionFive').innerHTML = finalistTwo + " do you wish to remain loyal to " + finalistOne + ' or betray the alliance?'
    document.getElementById("stayLoyalTwoLabel").innerHTML = 'Stay Loyal'
    document.getElementById("betrayTwoLabel").innerHTML = 'Betray'
  }


  function getAnswerFive() {   
    if(document.getElementById('stayLoyalTwo').checked){   
        var finalistTwoChoice = loyality}
        else if (document.getElementById('betrayTwo').checked){
     finalistTwoChoice= betrayal}

  sessionStorage.setItem('finalistTwoChoice', finalistTwoChoice)
  }

 function getRoundTwoResults(){
   if(sessionStorage.getItem('finalistOneChoice') == loyality && sessionStorage.getItem('finalistTwoChoice') == loyality){
    document.getElementById("resultsTwo").innerHTML = 'Both ' + finalistOne + ' and ' + finalistTwo + ' remained loyal to their alliance, the game prize is split!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   } 

   else if (sessionStorage.getItem('finalistOneChoice') == loyality && sessionStorage.getItem('finalistTwoChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = finalistOne + ' chose to remain loyal but ' + finalistTwo + ' chose to betray the alliance the alliance! ' + finalistTwo + ' wins and takes the game prize!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   }

   else if (sessionStorage.getItem('finalistTwoChoice') == loyality && sessionStorage.getItem('finalistOneChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = finalistTwo + ' chose to remain loyal but ' + finalistOne + ' chose to betray the alliance the alliance! ' + finalistOne + ' wins and takes the game prize!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   }

   else if (sessionStorage.getItem('finalistOneChoice') == betrayal && sessionStorage.getItem('finalistTwoChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = 'Both ' + finalistOne + ' and ' + finalistTwo + ' have betrayed their alliance! Both ' + finalistOne + ' and ' + finalistTwo + ' are elminated and lose their secondary contributions to the game prize! ' + sessionStorage.getItem('eliminatedPlayer') + ' wins and takes the game prize!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   }
 }





//Always refresh after each new attempt at code 

