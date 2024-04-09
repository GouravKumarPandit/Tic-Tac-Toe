let turnMusic = new Audio("clickSound.wav");
let turnShow = document.getElementById('turnShow');
let check = false;
const winDecide = () => {
    let winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let gameText = document.getElementsByClassName('gameText');
    winCombination.forEach( (element) => {
        if((gameText[element[0]].innerText === gameText[element[1]].innerText) && (gameText[element[2]].innerText === gameText[element[1]].innerText) && gameText[element[0]].innerText !== ""){
            turnShow.innerText = gameText[element[0]].innerText + " Win";
            check = true;
            gameText[element[0]].style.backgroundColor = "#1bf5af";
            gameText[element[1]].style.backgroundColor = "#1bf5af";
            gameText[element[2]].style.backgroundColor = "#1bf5af";
            document.getElementById('img').style.width = "100px";
        }
    });
};
let entryCount = 0;
let turn = 'X';
let singleBox = document.getElementsByClassName('singleBox');
Array.from(singleBox).forEach(element => {
    element.addEventListener('click', ()=>{
        if((element.firstElementChild.innerText === '') && (!check)){
            element.firstElementChild.innerText = turn;
            entryCount++;
            turnMusic.play();
            turn = (turn == 'X') ? "0" : "X";
            winDecide();
            if(!check)
                turnShow.innerText = `${turn} Turn`;
            if(entryCount == 9 && check == false)
                turnShow.innerText = "OOPPSS No One Won!!... PLEASE TRY AGAIN";
        }
    });
});

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', ()=>{
    location.reload();
})