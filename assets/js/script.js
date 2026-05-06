let uScore = document.querySelector('#yourScore');
let dScore = document.querySelector('#drawScore');
let cScore = document.querySelector('#compScore');
const reset = document.querySelector('.reset-btn');
let themeIcon = document.querySelector('#theme-icon');
let uS = 0, dS = 0, cS = 0;
let msg= document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

const draw = () => {
    msg.innerHTML = 'Game was draw :|';
    dS++;
    dScore.innerHTML = dS;
}

const showWinner = (uWin, uChoice, cChoice) => {
    if(uWin){
        msg.innerHTML = `Congrats! You win, ${uChoice} beats ${cChoice} :)`;
        uS++;
        uScore.innerHTML = uS;
    }
    else {
        msg.innerHTML = `Oops! Computer win, ${cChoice} beats ${uChoice} :(`;
        cS++;
        cScore.innerHTML = cS;
    }
}

const compGame = () => {
    const op = ['rock', 'paper', 'scissors']
    const ran = Math.floor(Math.random() *3)
    return op[ran]
}

const playGame = (uChoice) => {
    const cChoice = compGame()

    if(uChoice === cChoice){
        draw()
    }
    else {
        let uWin = true
        if(uChoice === 'rock'){
            uWin = cChoice === 'paper' ? false : true
        }
        else if(uChoice === 'paper'){
            uWin = cChoice === 'scissors' ? false : true
        }
        else{
            uWin = cChoice === 'rock' ? false : true
        }
        showWinner(uWin, uChoice, cChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const uChoice = choice.getAttribute('id')
        playGame(uChoice)
    })
});
reset.addEventListener('click', ()=>{
    uS = dS = cS = 0;
    uScore.innerHTML = uS;
    dScore.innerHTML = dS;
    cScore.innerHTML = cS;
    msg.innerHTML = 'Game reset, start again...';
})
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('light');
});