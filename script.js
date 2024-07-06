const gridContainer = document.getElementById("grid");

createGrid(16);

function createGrid(x){
    for(let i = 1; i <= x; i++){
        const gridRow = document.createElement("div");
        for(let y = 1; y <= x; y++){
            const gridItem = document.createElement("div");
            gridItem.textContent = i;
            gridItem.style.color = "white";
            gridRow.append(gridItem);
        }
        gridContainer.append(gridRow);
    }
}
