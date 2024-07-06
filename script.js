let gridContainer = document.getElementById("grid");
let slider = document.getElementById("myRange");
let gridText = document.getElementById("sizeText")

gridText.textContent = "Grid size: 5x5";
createGrid(5);

slider.oninput = function() {
    document.querySelectorAll('.gridBlocks').forEach(e => e.remove());
    document.querySelectorAll('.gridRows').forEach(e => e.remove());
    createGrid(slider.value);
    gridText.textContent = `Grid size: ${slider.value}x${slider.value}`
}

let color = "rgb(0, 0, 0)";



function createGrid(x){
    for(let i = 1; i <= x; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRows");
        for(let y = 1; y <= x; y++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridBlocks");
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = color;
            });
            gridRow.append(gridItem);
        }
        gridContainer.append(gridRow);
    }
}
