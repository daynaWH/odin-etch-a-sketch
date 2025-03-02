const container = document.getElementById("grid-container");
const rangeInput = document.getElementById("grid-size");
const sizeValue = document.getElementById("size-value");
const btnBW = document.getElementById("btn-bw");
const btnRainbow = document.getElementById("btn-rainbow");
const btnEraser = document.getElementById("btn-eraser");
const btnClear = document.getElementById("btn-clear");
const colorPalette = document.getElementById("palette");

let n = document.getElementById("grid-size").value;

// Default color
let brushColor = colorPalette.value;

// Color input from the picker
colorPalette.addEventListener("input", function (e) {
    brushColor = e.target.value;
});

// Generate initial grid of n x n (5x5)
generateBoard();

// Generate new grid upon changing grid size from the input
rangeInput.addEventListener("input", function (e) {
    n = e.target.value;
    generateBoard();
});

// Event listeners for buttons
btnBW.addEventListener("click", function () {
    addColor(brushColor);
});

btnEraser.addEventListener("click", function () {
    addColor("white");
});

btnRainbow.addEventListener("click", function () {
    addColor(getRandomColor(), true);
});

btnClear.addEventListener("click", clearBoard);

// Generate board of size n x n and set default brush color
function generateBoard() {
    sizeValue.textContent = `${n} x ${n}`;

    // Remove all existing squares
    container.innerHTML = "";

    // Generate squares of n x n
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    addColor(brushColor);
}

// Add color to the grid elements upon clicking
function addColor(color, isRainbow = false) {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", function () {
            const finalColor = isRainbow ? getRandomColor() : color;
            square.style.backgroundColor = finalColor;
        });
    });
}

// Generate Random Color
function getRandomColor() {
    const hexCharacters = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];

    let hexValue = "";

    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * hexCharacters.length);
        hexValue += hexCharacters[x];
    }
    return `#${hexValue}`;
}

// Clear the board
function clearBoard() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}
