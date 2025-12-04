let turn = "X";  
let board = ["", "", "", "", "", "", "", "", ""];

function placeXOrO(index) {
    // If spot is already filled, do nothing
    if (board[index] !== "") return;

    // Place X or O
    board[index] = turn;

    // Get clicked cell
    let cell = document.getElementsByClassName("cell")[index];

    // Create image
    let img = document.createElement("img");
    img.src = `images/${turn}.png`;

    // Add image to the cell
    cell.appendChild(img);

    // Switch turn
    turn = turn === "X" ? "O" : "X";
}
