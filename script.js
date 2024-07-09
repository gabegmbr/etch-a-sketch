let gridContainer = document.getElementById("grid");
let slider = document.getElementById("myRange");
let gridText = document.getElementById("sizeText")
let colorPickerBar = document.getElementById("colorPicker");
let header = document.querySelector("h1");
let random = 0;

gridText.textContent = "Grid size: 32x32";
createGrid(32);

slider.oninput = function() {
    document.querySelectorAll('.gridBlocks').forEach(e => e.remove());
    document.querySelectorAll('.gridRows').forEach(e => e.remove());
    createGrid(slider.value);
    gridText.textContent = `Grid size: ${slider.value}x${slider.value}`
}

let color = "rgb(0, 0, 0)";

function changeColor(rgb){
    random = 0;
    color = rgb;
    colorPickerBar.style.borderColor = rgb;
    header.style.color = rgb;
}

function enableRandomMode(){
    if(random == 0) random = 1;
    else random = 0;
}

function randomColor(){
    color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    colorPickerBar.style.borderColor = color;
    header.style.color = color;
}

function createGrid(x){
    for(let i = 1; i <= x; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRows");
        for(let y = 1; y <= x; y++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridBlocks");
            gridItem.addEventListener("mouseover", () => {
                if(random == 1) randomColor();
                gridItem.style.backgroundColor = color;
            });
            gridRow.append(gridItem);
        }
        gridContainer.append(gridRow);
    }
}
