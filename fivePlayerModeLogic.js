//FORM 

function validateForm() {
  let one = document.forms["fiveForm"]["nameOne"].value;
  let two = document.forms["fiveForm"]["nameTwo"].value;
  let three = document.forms["fiveForm"]["nameThree"].value;
  let four = document.forms["fiveForm"]["nameFour"].value;
  let five = document.forms["fiveForm"]["nameFive"].value;
  if (one == "" || two=="" || three=="" || four=="" || five=="") {
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
        sessionStorage.nameFive = document.getElementById("playerFiveName").value;
    }
    document.getElementById("fiveForm").submit();
  }

var displayPlayers = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree, sessionStorage.nameFour, sessionStorage.nameFive ]

//ROUND ONE  

function roundOnePlayers(){
      var playerNames = document.getElementById("roundOnePlayerNames");
      
   displayPlayers.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        playerNames.appendChild(li);
      });
      };

  var players = [sessionStorage.nameOne, sessionStorage.nameTwo, sessionStorage.nameThree, sessionStorage.nameFour, sessionStorage.nameFive ]

  function gameFunctionOne(){

    var randomPlayer = Math.floor(Math.random()* players.length)
    var eliminatedPlayer = players.splice(randomPlayer,1)
  
    var secondRandomPlayer = Math.floor(Math.random()* players.length)
    var secondEliminatedPlayer = players.splice(secondRandomPlayer, 1)
  
    sessionStorage.setItem("eliminatedPlayer", eliminatedPlayer)
    sessionStorage.setItem("secondEliminatedPlayer",secondEliminatedPlayer)


 document.getElementById("eliminatedPlayer").innerHTML = eliminatedPlayer + " you are eliminated!"
 document.getElementById("secondEliminatedPlayer").innerHTML = secondEliminatedPlayer + " you are eliminated!"
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
  if(playerOne != sessionStorage.getItem("eliminatedPlayer") || sessionStorage.getItem("secondEliminatedPlayer")){
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
    if(playerTwo != sessionStorage.getItem("eliminatedPlayer") || sessionStorage.getItem("secondEliminatedPlayer")){
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
      if(playerThree != sessionStorage.getItem("eliminatedPlayer") || sessionStorage.getItem("secondEliminatedPlayer")){
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
    var thirdEliminatedPlayer = playerThree
    var playerOneB = playerOne
    var playerTwoB = playerTwo

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = playerOne + ' and ' + playerThree + ' have formed an alliance. ' + playerTwo + ' is eliminated. Again, depending on what happens ' + playerTwo + ' may re-enter the game.'
    document.getElementById('resultsA').innerHTML = 'Continue'
    thirdEliminatedPlayer = playerTwo
     playerOneB = playerOne
     playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = playerTwo + ' and ' + playerThree + ' have formed an alliance. ' + playerOne + ' is eliminated. Again, depending on what happens ' + playerOne + ' may re-enter the game.'  
    document.getElementById('resultsA').innerHTML = 'Continue'
    thirdEliminatedPlayer = playerOne 
    var playerOneB = playerTwo
    var playerTwoB = playerThree

  } else if(sessionStorage.getItem('playerOneChoice') == playerTwo && sessionStorage.getItem('playerTwoChoice') == playerThree && sessionStorage.getItem('playerThreeChoice') == playerOne){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'

  } else if(sessionStorage.getItem('playerOneChoice') == playerThree && sessionStorage.getItem('playerTwoChoice') == playerOne && sessionStorage.getItem('playerThreeChoice') == playerTwo){
    document.getElementById('results').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
    document.getElementById('resultsB').innerHTML = 'New Game'
  }
  sessionStorage.setItem("thirdEliminatedPlayer", thirdEliminatedPlayer)
  sessionStorage.setItem("playerOneB", playerOneB)
  sessionStorage.setItem("playerTwoB", playerTwoB)
 }


//ROUND THREE

var thirdEliminatedPlayer = sessionStorage.getItem("thirdEliminatedPlayer")
var finalistOne = sessionStorage.getItem("playerOneB") 
var finalistTwo = sessionStorage.getItem("playerTwoB") 
var loyality = 'loyality'
var betrayal = 'betrayal'


function giveDeviceToFinalistOne(){
document.getElementById("giveDeviceToF1").innerHTML = 'Give Device To ' + finalistOne
}


function questionFour(){
  document.getElementById('questionFour').innerHTML = finalistOne + " do you wish to remain loyal to " + finalistTwo + ' or betray the alliance'
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
    document.getElementById("resultsTwo").innerHTML = 'Both ' + finalistOne + ' and ' + finalistTwo + ' have betrayed their alliance! Both ' + finalistOne + ' and ' + finalistTwo + ' are elminated and lose their secondary contributions to the game prize! ' + sessionStorage.getItem('eliminatedPlayer') + ' , ' + sessionStorage.getItem('secondEliminatedPlayer')  + ' and ' + sessionStorage.getItem('thirdEliminatedPlayer')  + ' are back in the game!'
    document.getElementById('resultsC').innerHTML = 'Continue'
   }
 }

//ROUND FOUR
 var revivedOne = sessionStorage.getItem('eliminatedPlayer')
 var revivedTwo = sessionStorage.getItem('secondEliminatedPlayer')
 var revivedThree = sessionStorage.getItem('thirdEliminatedPlayer')

 function giveDeviceToRevivedOne(){
  document.getElementById("giveDeviceToR1").innerHTML = 'Give Device To ' + revivedOne
  }

  function questionSix(){
    document.getElementById("questionSix").innerHTML = revivedOne + ' , who do you wish to form a new alliance with? '
    document.getElementById("optionSevenLabel").innerHTML = revivedTwo
    document.getElementById("optionEightLabel").innerHTML = revivedThree
    }; 

    function getAnswerSix() {   
      if(document.getElementById('optionSeven').checked){   
          var revivedOneChoice = revivedTwo}
          else if (document.getElementById('optionEight').checked){
       revivedOneChoice = revivedThree}
  
    sessionStorage.setItem('revivedOneChoice', revivedOneChoice)
    }

    function giveDeviceToRevivedTwo(){
      document.getElementById("giveDeviceToR2").innerHTML = 'Give Device To ' + revivedTwo
      }
    
    function questionSeven(){
        document.getElementById("questionSeven").innerHTML = revivedTwo + ' , who do you wish to form a new alliance with? '
        document.getElementById("optionNineLabel").innerHTML = revivedOne
        document.getElementById("optionTenLabel").innerHTML = revivedThree
        }; 
    
    function getAnswerSeven() {   
          if(document.getElementById('optionNine').checked){   
              var revivedTwoChoice = revivedOne}
              else if (document.getElementById('optionTen').checked){
           revivedTwoChoice = revivedThree}
      
        sessionStorage.setItem('revivedTwoChoice', revivedTwoChoice)
        }

        function giveDeviceToRevivedThree(){
          document.getElementById("giveDeviceToR3").innerHTML = 'Give Device To ' + revivedThree
          }
        
        function questionEight(){
            document.getElementById("questionEight").innerHTML = revivedThree + ' , who do you wish to form a new alliance with? '
            document.getElementById("optionElevenLabel").innerHTML = revivedOne
            document.getElementById("optionTwelveLabel").innerHTML = revivedTwo
            }; 
        
        function getAnswerEight() {   
              if(document.getElementById('optionEleven').checked){   
                  var revivedThreeChoice = revivedOne}
                  else if (document.getElementById('optionTwelve').checked){
               revivedThreeChoice = revivedTwo}
          
            sessionStorage.setItem('revivedThreeChoice', revivedThreeChoice)
            }

        
            function getRoundFourResults(){
              if(sessionStorage.getItem('revivedOneChoice') == revivedTwo && sessionStorage.getItem('revivedTwoChoice') == revivedOne){
                document.getElementById('resultsE').innerHTML = revivedOne + ' and ' + revivedTwo + ' have formed an alliance. ' + revivedThree + ' is permenantly eliminated but could still win depending on what happens!'
                document.getElementById('resultsF').innerHTML = 'Continue'
                var fourthEliminatedPlayer = revivedThree
                var secondFinalistOne = revivedOne
                var secondFinalistTwo = revivedTwo
            
              } 
              else if(sessionStorage.getItem('revivedOneChoice') == revivedThree && sessionStorage.getItem('revivedThreeChoice') == revivedOne){
                document.getElementById('resultsE').innerHTML = revivedOne + ' and ' + revivedThree + ' have formed an alliance. ' + revivedTwo + ' is permenantly eliminated but could still win depending on what happens!'
                document.getElementById('resultsF').innerHTML = 'Continue'
                fourthEliminatedPlayer = revivedTwo
                secondFinalistOne = revivedOne
                secondFinalistTwo = revivedThree
            
              } 
          
              else if(sessionStorage.getItem('revivedTwoChoice') == revivedThree && sessionStorage.getItem('revivedThreeChoice') == revivedTwo){
                document.getElementById('resultsE').innerHTML = revivedTwo + ' and ' + revivedThree + ' have formed an alliance. ' + revivedOne + ' is permenantly eliminated but could still win depending on what happens!'
                document.getElementById('resultsF').innerHTML = 'Continue'
                fourthEliminatedPlayer = revivedOne
                secondFinalistOne = revivedTwo
                secondFinalistTwo = revivedThree
            
              } 
              
              else if(sessionStorage.getItem('revivedOneChoice') == revivedTwo && sessionStorage.getItem('revivedTwoChoice') == revivedThree && sessionStorage.getItem('revivedThreeChoice') == revivedOne){
                document.getElementById('resultsE').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
                document.getElementById('resultsG').innerHTML = 'New Game'
            
              } 

              else if(sessionStorage.getItem('revivedOneChoice') == revivedThree && sessionStorage.getItem('revivedTwoChoice') == revivedOne && sessionStorage.getItem('revivedThreeChoice') == revivedTwo){
                document.getElementById('resultsE').innerHTML = 'Each player has been chosen by another; no alliance has been formed. The game prize shall split between the remaining three players.' 
                document.getElementById('resultsG').innerHTML = 'New Game'
            
              } 
              sessionStorage.setItem("fourthEliminatedPlayer", fourthEliminatedPlayer)
              sessionStorage.setItem("secondFinalistOne", secondFinalistOne)
              sessionStorage.setItem("secondFinalistTwo", secondFinalistTwo)
            };          


            
//ROUND FIVE 

function roundFiveExplanation(){
  document.getElementById("potentialWinner").innerHTML = sessionStorage.getItem('fourthEliminatedPlayer')
}

var finalFinalistOne = sessionStorage.getItem('secondFinalistOne')
var finalFinalistTwo = sessionStorage.getItem('secondFinalistTwo')


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


    function getRoundFiveResults(){
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
       document.getElementById("resultsThree").innerHTML = 'Both ' + finalFinalistOne + ' and ' + finalFinalistTwo + ' have betrayed their alliance! Both lose their secondary contributions to the game prize! ' + sessionStorage.getItem('fourthEliminatedPlayer') + ' takes the game prize!' 
       document.getElementById('resultsH').innerHTML = 'New Game'
      }
    }


//Always refresh after each new attempt at code 

