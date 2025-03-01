const container = document.getElementById("grid-container");
const rangeInput = document.getElementById("grid-size");
const sizeValue = document.getElementById("size-value");
const btnBW = document.getElementById("btn-bw");
const btnRainbow = document.getElementById("btn-rainbow");
const btnEraser = document.getElementById("btn-eraser");
const btnClear = document.getElementById("btn-clear");
const colorPalette = document.getElementById("palette");

let n = document.getElementById("grid-size").value;
let brushColor = "#000000";

colorPalette.addEventListener("input", function (e) {
    brushColor = e.target.value;
    console.log(brushColor);
});

// Initial grid of n x n (5x5)
generateBoard();

rangeInput.addEventListener("input", function (e) {
    n = e.target.value;
    generateBoard();
});

function generateBoard() {
    console.log(n);
    sizeValue.textContent = `${n} x ${n}`;

    // Remove all squares
    container.innerHTML = "";

    // Generate squares of n x n
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", function (btnSelected) {
            console.log(brushColor);
            square.style.backgroundColor = brushColor;
            console.log(square.style.backgroundColor);
        });
    });

    btnBW.addEventListener("click", function () {
        squares.forEach((square) => {
            square.addEventListener("click", function (btnSelected) {
                square.style.backgroundColor = brushColor;
            });
        });
    });

    btnEraser.addEventListener("click", function () {
        squares.forEach((square) => {
            square.addEventListener("click", function (btnSelected) {
                square.style.backgroundColor = "white";
            });
        });
    });

    btnRainbow.addEventListener("click", function () {
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

            hexValue = "";

            for (let i = 0; i < 6; i++) {
                let x = Math.floor(Math.random() * hexCharacters.length);
                this.hexValue += hexCharacters[x];
            }
            return hexValue;
        }

        squares.forEach((square) => {
            square.addEventListener("click", function () {
                getRandomColor();
                square.style.backgroundColor = `#${hexValue}`;
            });
        });
    });

    btnClear.addEventListener("click", function () {
        squares.forEach((square) => {
            square.style.backgroundColor = "white";
        });
    });
}
