let socket = io();
let side = 40;
let grassColor = "green";
let grassEaterColor = "yellow";
let predatorColor = "red";
let fireColor = "orange";
let waterColor = "blue";
let soilColor = "brown";

let springButton = document.getElementById('spring');
let summerButtom = document.getElementById('summer');
let autumnButtom = document.getElementById('autumn');
let winterButton = document.getElementById('winter');

springButton.addEventListener("click", handleSpring);
summerButtom.addEventListener("click", handleSummer);
autumnButtom.addEventListener("click", handleAutumn);
winterButton.addEventListener("click", handleWinter);

function handleSpring(){
        grassColor = "#dead55";
        grassEaterColor = "#dea155";
        predatorColor = "#ff3255"
}

function handleSummer(){
        grassColor = "green";
        grassEaterColor = "yellow";
        predatorColor = "red"
}

function handleAutumn(){
        grassColor = "#9e8100";
        grassEaterColor = "#dedb55";
        predatorColor = "#b13255"
}

function handleWinter(){
        grassColor = "#6b6054";
        grassEaterColor = "#deff55";
        predatorColor = "#913255"
}



function setup() {
        frameRate(15);
        createCanvas(20 * side, 20* side);

}


function depict(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill(grassColor)
                        } else if(matrix[y][x] == 2){
                                fill(grassEaterColor)
                        } else if(matrix[y][x] == 3){
                                fill(predatorColor)
                        } else if(matrix[y][x] == 4){
                                fill(fireColor)
                        } else if(matrix[y][x] == 5){
                                fill(waterColor)
                        } else if(matrix[y][x] == 6){
                                fill(soilColor)
                        }
                        else{
                                fill("grey")
                        }
                        rect(x * side, y * side, side, side)
                }
        }
}

setInterval(
        function () {
        socket.on('send matrix', depict)
        },1000
    )