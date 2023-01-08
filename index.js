
let roundoutcome = document.getElementById('outcomeround')
let getrounds = document.getElementById('gamerounds')
let userdisp = document.getElementById('userscore')
let botdisp = document.getElementById('botscore')
let userscore = 0
let botscore = 0


let rounds = 0

let rock = 1
let paper = 2
let scissor = 3

let userchoice = 0


document.getElementById('rock').onclick = () =>{
   document.getElementById('user').src = "img/rock.png"
   userchoice = rock
   res()
}

document.getElementById('paper').onclick = () =>{
   document.getElementById('user').src = "img/paper.png"
   userchoice = paper
   res()
}

document.getElementById('scissor').onclick = () =>{
   document.getElementById('user').src = "img/scissors.png"
   userchoice = scissor
   res()
}

document.getElementById('reset').onclick = () =>{
   userscore = 0
   botscore = 0
   rounds = 0
   userdisp.innerHTML = userscore
   botdisp.innerHTML = botscore
   getrounds.innerHTML = rounds
   document.getElementById('outcome').innerHTML = ""
   roundoutcome.innerHTML = ""
}


function res(){
   let botchoice = Math.floor(Math.random() * 3 + 1)
   let botimg = document.getElementById('bot')

   if(botchoice == 1){
      botimg.src = "img/rock.png"
   }
   else if(botchoice == 2) {
      botimg.src = "img/paper.png"
   } 
   else if(botchoice == 3) {
      botimg.src = "img/scissors.png"
   }

   // //TIE OUTCOMES
   if(userchoice == 1 && botchoice == 1){
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the same - TIE"
   }
   else if(userchoice == 2 && botchoice == 2){
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the same - TIE"
      
   }
   else if(userchoice == 3 && botchoice == 3){
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the same - TIE"
   }//WINS OUTCOMES
   else if(userchoice == 1 && botchoice == 3){
      userscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Scissor - You Win"
   }
   else if(userchoice == 2 && botchoice == 1){
      userscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Rock - You Win"
   }
   else if(userchoice == 3 && botchoice == 2){
      userscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Paper - You Win"
   }//LOSE OUTCOMES
   else if(userchoice == 3 && botchoice == 1){
      botscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Rock - You Lose"
   }
   else if(userchoice == 1 && botchoice == 2){
      botscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Paper - You Lose"
   }
   else if(userchoice == 2 && botchoice == 3){
      botscore += 1
      rounds+=1
      userdisp.innerHTML = userscore
      botdisp.innerHTML = botscore
      getrounds.innerHTML = rounds
      roundoutcome.innerHTML = "Bot Choose the Scissor - You Lose"
   }

   
   if(rounds == 3){
      if(userscore > botscore){      
         userscore = 0
         botscore = 0
         rounds = 0
         userdisp.innerHTML = userscore
         botdisp.innerHTML = botscore
         getrounds.innerHTML = rounds
         document.getElementById('outcome').innerHTML = "VICTORY"
      }
      else if(botscore > userscore){   
         userscore = 0
         botscore = 0
         rounds = 0
         userdisp.innerHTML = userscore
         botdisp.innerHTML = botscore
         getrounds.innerHTML = rounds
         document.getElementById('outcome').innerHTML = "DEFEAT"
      }
      else if(botscore == userscore){
         userscore = 0
         botscore = 0
         rounds = 0
         userdisp.innerHTML = userscore
         botdisp.innerHTML = botscore
         getrounds.innerHTML = rounds
         document.getElementById('outcome').innerHTML = "TIE"
      }
   }
}

