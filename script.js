const winSound = new Audio('applause-cheer-236786.mp3');
 const loseSound = new Audio('lose-sfx-365579.mp3');
const drawSound = new Audio('alerte-346112.mp3');
function play(playerchoice){
    const choices =['rock','paper','scissor'];
    const computerchoice = choices[Math.floor(Math.random() *3)];
    
    let result ='';
    if(playerchoice ===computerchoice){
        result="It's a draw!";
        resulttext="draw";
        drawSound.play();

    }
    else if(
        (playerchoice==='rock'&& computerchoice==='scissor')||
        (playerchoice==='paper'&&computerchoice==='rock')||
        (playerchoice==='scissor'&&computerchoice==='paper')
    ) {
        result ='YOU WIN!';
        resulttext="win";
        winSound.play();
    }
    else{
        result ='YOU LOSE!'
        resulttext="lose";
        loseSound.play();
    }
    document.getElementById('result').innerHTML =
`
<div class="message">
You chose <b>${playerchoice}</b><br>
Computer chose <b>${computerchoice}</b><br>
<span class="${resulttext}">${result}</span>
</div>
`;
}

// We're putting the result text (like "You win!" or "You lose!") inside a <span> so that we can:

// Change its color (red for lose, green for win)

// Make it bold or large

// Update it with JavaScript easily
// ${playerChoice}	shows what you clicked
// ${computerChoice}	shows what the computer picked
// ${result}	shows if you win, lose, or draw
// <b>...</b>	bold text
// <br>	line break
// <span>...</span>	inline container (used for styling)