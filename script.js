const para = document.querySelector('.para');
const para2 = document.querySelector('.para2');

let user ;
let pc ;
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

button1.addEventListener('click', () =>{
    user = 'S';
    playGame();
})
button2.addEventListener('click', () =>{
    user = 'W';
    playGame();

})
button3.addEventListener('click', () =>{
    user = 'G';
    playGame();

})


function playGame(){
const cpu = Math.floor(Math.random()*3)
if(cpu === 0){
    pc = 'S';
    console.log(pc)
}
else if(cpu === 1){
    pc = 'W';
    console.log(pc)

}
else{
    pc = 'G';
    console.log(pc)

}


if(user === pc){
    para2.innerHTML = `You Clicked on ${user} and the CPU also Clicked on ${pc}`
    para.innerHTML = `it's a tie..`
    
}
else if (
        (user === "S" && pc === "w") ||
        (user === "W" && pc === "G") 
    ) {
        para2.innerHTML = `You Clicked on ${user} and the CPU Clicked on ${pc}`
        para.innerHTML = `Congrats!! You won`

    } else {
        para2.innerHTML = `You Clicked on ${user} and the CPU Clicked on ${pc}`
        para.innerHTML = `Sorry! You loose`

    }
}
