let boxes = document.querySelectorAll(".box");
let main = document.querySelector(".main")
let resetbtn = document.querySelector("#resetbtn");
let colourx1 = document.querySelector(".colourx1");
let colourx2 = document.querySelector("colourx2");
let newgamebutton = document.querySelector("#newbutton");
let msgcontainer = document.querySelector(".msgg-container")
let message = document.querySelector("#msgg");
let hide = document.querySelector(".hide");

let turnO = true // player x or player y
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
// console.log(winningpattern);
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        if (turnO) {
            box.innerText = ("O");
            turnO = false;
            box.classList.add("colourx1");
        }
        else {
            box.innerText = ("X");
            turnO = true;
            box.classList.add("colourx2");
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        main.classList.remove("hide");
    }

}
const showWinner = (winner) => {
    message.innerText = `Congratulation winner is ${winner}`;
    hide.classList.remove("hide");
    main.classList.add("hide");
    disableboxes();
}
const checkWinner = () => {
    for (let pattern of winningpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    enableboxes();
    hide.classList.add("hide");
}

newgamebutton.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);