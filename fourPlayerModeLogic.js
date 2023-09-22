//FORM 

function validateForm() {
  let one = document.forms["fourForm"]["nameOne"].value;
  let two = document.forms["fourForm"]["nameTwo"].value;
  let three = document.forms["fourForm"]["nameThree"].value;
  let four = document.forms["fourForm"]["nameFour"].value;
  if (one == "" || two=="" || three=="" || four=="" ) {
    alert("All names must be filled in!");
    return false;
  } else {startGame()}
}
      function startGame(){
      if(typeof(sessionStorage) != "undefined"){
        sessionStorage.nameOne = document.getElementById("playerOneName").value;
        sessionStorage.nameTwo = document.getElementById("playerTwoName").value;
        sessionStorage.nameThree = document.getElementById("playerThreeName").value;
        sessionStorage.nameFour = document.getElementById("playerFourName").value;
        
    }
    document.getElementById("fourForm").submit();
  }

var displayPlayers = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree, sessionStorage.nameFour]

//ROUND ONE  

function roundOnePlayers(){
      var playerNames = document.getElementById("roundOnePlayerNames");
      
   displayPlayers.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        playerNames.appendChild(li);
      });
      };

  var players = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree, sessionStorage.nameFour ]

  function gameFunctionOne(){

    var randomPlayer = Math.floor(Math.random()* players.length)
    var eliminatedPlayer = players.splice(randomPlayer,1)
  
  
  
    sessionStorage.setItem("eliminatedPlayer", eliminatedPlayer)
    


 document.getElementById("eliminatedPlayer").innerHTML = eliminatedPlayer + " you are eliminated!"

 document.getElementById("remainingPlayers").innerHTML = players[0]+', '+players[1]+' and '+ players[2] + " you are through to the next round!"

 var playerOneA = players[0]
 var playerTwoA = players[1]
 var playerThreeA = players[2]


sessionStorage.setItem("playerOneA", playerOneA)
sessionStorage.setItem("playerTwoA", playerTwoA)
sessionStorage.setItem("playerThreeA", playerThreeA)



};
 
//ROUND TWO 

var playerOne = sessionStorage.getItem("playerOneA")
var playerTwo = sessionStorage.getItem("playerTwoA")
var playerThree = sessionStorage.getItem("playerThreeA")


function giveDeviceToPlayerOne(){
  if(playerOne != sessionStorage.getItem("eliminatedPlayer")){
  document.getElementById("giveDeviceToP1").innerHTML = "Give Device To " + playerOne
}};

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
    if(playerTwo != sessionStorage.getItem("eliminatedPlayer")){
    document.getElementById("giveDeviceToP2").innerHTML = "Give Device To " + playerTwo
  }};
  
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
      if(playerThree != sessionStorage.getItem("eliminatedPlayer")){
      document.getElementById("giveDeviceToP3").innerHTML = "Give Device To " + playerThree
    }};
    
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

 function getRoundTwoResults(){
  if(sessionStorage.getItem('playerOneChoice') == playerTwo && sessionStorage.getItem('playerTwoChoice') == playerOne){
    document.getElementById('results').innerHTML =  playerOne + ' and ' + playerTwo + ' have formed an alliance. ' + playerThree + ' is eliminated. Again, depending on what happens ' + playerThree + ' may re-enter the game. '             
    document.getElementById('resultsA').innerHTML = 'Continue'
    var secondEliminatedPlayer = playerThree
    var playerOneB = playerOne
    var playerTwoB = playerTwo

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = playerOne + ' and ' + playerThree + ' have formed an alliance. ' + playerTwo + ' is eliminated. Again, depending on what happens ' + playerTwo + ' may re-enter the game.'
    document.getElementById('resultsA').innerHTML = 'Continue'
    secondEliminatedPlayer = playerTwo
     playerOneB = playerOne
     playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = playerTwo + ' and ' + playerThree + ' have formed an alliance. ' + playerOne + ' is eliminated. Again, depending on what happens ' + playerOne + ' may re-enter the game.'  
    document.getElementById('resultsA').innerHTML = 'Continue'
    secondEliminatedPlayer = playerOne 
    var playerOneB = playerTwo
    var playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerOneChoice') == playerTwo && sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerTwoChoice') == playerOne && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'
  }
  sessionStorage.setItem("secondEliminatedPlayer", secondEliminatedPlayer)
  sessionStorage.setItem("playerOneB", playerOneB)
  sessionStorage.setItem("playerTwoB", playerTwoB)
 }


//ROUND THREE

var secondEliminatedPlayer = sessionStorage.getItem("secondEliminatedPlayer")
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
    document.getElementById('questionFive').innerHTML = finalistTwo + " do you wish to remain loyal to " + finalistOne + ' or betray the alliance'
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

 function getRoundThreeResults(){
   if(sessionStorage.getItem('finalistOneChoice') == loyality && sessionStorage.getItem('finalistTwoChoice') == loyality){
    document.getElementById("resultsTwo").innerHTML = 'Both ' + finalistOne + ' and ' + finalistTwo + ' remained loyal to their alliance, the game prize is split!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   } 

   else if (sessionStorage.getItem('finalistOneChoice') == loyality && sessionStorage.getItem('finalistTwoChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = finalistOne + ' chose to remain loyal but ' + finalistTwo + ' chose to betray the alliance! ' + finalistTwo + ' wins and takes the game prize!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   }

   else if (sessionStorage.getItem('finalistTwoChoice') == loyality && sessionStorage.getItem('finalistOneChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = finalistTwo + ' chose to remain loyal but ' + finalistOne + ' chose to betray the alliance! ' + finalistOne + ' wins and takes the game prize!'
    document.getElementById('resultsD').innerHTML = 'New Game'
   }

   else if (sessionStorage.getItem('finalistOneChoice') == betrayal && sessionStorage.getItem('finalistTwoChoice') == betrayal){
    document.getElementById("resultsTwo").innerHTML = 'Both ' + finalistOne + ' and ' + finalistTwo + ' have betrayed their alliance! Both ' + finalistOne + ' and ' + finalistTwo + ' are elminated and lose their secondary contributions to the game prize! ' + sessionStorage.getItem('eliminatedPlayer') + ' and ' + sessionStorage.getItem('secondEliminatedPlayer')  + ' are back in the game!'
    document.getElementById('resultsC').innerHTML = 'Continue'
   }
 }

//ROUND FOUR
 var finalFinalistOne = sessionStorage.getItem('eliminatedPlayer')
 var finalFinalistTwo = sessionStorage.getItem('secondEliminatedPlayer')
 

function roundFourExplanation(){
  //need to outline who the revived players are 
}


function giveDeviceToFinalFinalistOne(){
  document.getElementById("giveDeviceToFF1").innerHTML = 'Give Device To ' + finalFinalistOne
  }
  
  
  function questionNine(){
    document.getElementById('questionNine').innerHTML = finalFinalistOne + " do you wish to remain loyal to " + finalFinalistTwo + ' or betray the alliance?'
    document.getElementById("stayLoyalThreeLabel").innerHTML = 'Stay Loyal'
    document.getElementById("betrayThreeLabel").innerHTML = 'Betray'
  }
 
    function getAnswerNine() {   
      if(document.getElementById('stayLoyalThree').checked){   
          var finalFinalistOneChoice = loyality}
          else if (document.getElementById('betrayThree').checked){
       finalFinalistOneChoice= betrayal}
  
    sessionStorage.setItem('finalFinalistOneChoice', finalFinalistOneChoice)
    }


    function giveDeviceToFinalFinalistTwo(){
      document.getElementById("giveDeviceToFF2").innerHTML = 'Give Device To ' + finalFinalistTwo
      }
  
    function questionTen(){
      document.getElementById('questionTen').innerHTML = finalFinalistTwo + " do you wish to remain loyal to " + finalFinalistOne + ' or betray the alliance?'
      document.getElementById("stayLoyalFourLabel").innerHTML = 'Stay Loyal'
      document.getElementById("betrayFourLabel").innerHTML = 'Betray'
    }
  
  
    function getAnswerTen() {   
      if(document.getElementById('stayLoyalFour').checked){   
          var finalFinalistTwoChoice = loyality}
          else if (document.getElementById('betrayFour').checked){
       finalFinalistTwoChoice = betrayal}
  
    sessionStorage.setItem('finalFinalistTwoChoice', finalFinalistTwoChoice)
    }


    function getRoundFourResults(){
      if(sessionStorage.getItem('finalFinalistOneChoice') == loyality && sessionStorage.getItem('finalFinalistTwoChoice') == loyality){
       document.getElementById("resultsThree").innerHTML = 'Both ' + finalFinalistOne + ' and ' + finalFinalistTwo + ' remained loyal to their alliance, the game prize is split between the two of them!'
       document.getElementById('resultsH').innerHTML = 'New Game'
      } 
   
      else if (sessionStorage.getItem('finalFinalistOneChoice') == loyality && sessionStorage.getItem('finalFinalistTwoChoice') == betrayal){
       document.getElementById("resultsThree").innerHTML = finalFinalistOne + ' chose to remain loyal but ' + finalFinalistTwo + ' chose to betray the alliance! ' + finalFinalistTwo + ' wins and takes the game prize!'
       document.getElementById('resultsH').innerHTML = 'New Game'
      }
   
      else if (sessionStorage.getItem('finalFinalistTwoChoice') == loyality && sessionStorage.getItem('finalFinalistOneChoice') == betrayal){
       document.getElementById("resultsThree").innerHTML = finalFinalistTwo + ' chose to remain loyal but ' + finalFinalistOne + ' chose to betray the alliance! ' + finalFinalistOne + ' wins and takes the game prize!'
       document.getElementById('resultsH').innerHTML = 'New Game'
      }
   
      else if (sessionStorage.getItem('finalFinalistOneChoice') == betrayal && sessionStorage.getItem('finalFinalistTwoChoice') == betrayal){
       document.getElementById("resultsThree").innerHTML = 'Both ' + finalFinalistOne + ' and ' + finalFinalistTwo + ' have betrayed their alliance! Both lose their secondary contributions to the game prize. The winner shall now be selected randomly and will take the whole game prize.'  
       document.getElementById('resultsI').innerHTML = 'Continue'
      }
    }


//ROUND FIVE

function roundFivePlayers(){
  var playerNames = document.getElementById("roundFivePlayerNames");
  
displayPlayers.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    playerNames.appendChild(li);
  });
  };

var players = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree, sessionStorage.nameFour ]

function gameFunctionTwo(){

var randomPlayer = Math.floor(Math.random()* players.length)
var winner = players.splice(randomPlayer,1)



sessionStorage.setItem("winner", winner)



document.getElementById("winner").innerHTML = winner + " wins and takes all!"
}


//Always refresh after each new attempt at code 

