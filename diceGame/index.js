var seedDice1, seedDice2;

    function winner() { //update the h1 content
        if(seedDice1 > seedDice2){
          document.querySelector("h1").innerHTML = "Player 1 Wins "; 
        }
        else if(seedDice1 < seedDice2){
          document.querySelector("h1").innerHTML = "Player 2 Wins";
        }
        else{
          document.querySelector("h1").innerHTML = "Draw!";
        }
    }

    function rollDices() {
      //update the dice image  
      document.getElementById("dice1").setAttribute("src", "images/dice"+seedDice1+".png");    
      document.getElementById("dice2").setAttribute("src", "images/dice"+seedDice2+".png");
    }

    function startGame(){
      seedDice1 = Math.floor(Math.random()*6) + 1; //update variables
      seedDice2 = Math.floor(Math.random()*6) + 1;
      rollDices();
      winner();
    }

  document.querySelector("button").addEventListener("click", startGame); //handle the game

