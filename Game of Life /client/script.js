var socket = io();

function setup() {
        frameRate(15);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr)
                        } else if(matrix[y][x] == 2){
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if(matrix[y][x] == 3){
                                let pred = new Predator(x, y)
                                predatorArray.push(pred)
                        } else if (matrix [y][x] == 4){
                                let fire = new Fire(x, y)
                                fireArray.push(fire)
                        } else if (matrix[y][x] == 5){
                                let water = new Water(x, y)
                                waterArray.push(water)
                        } else if(matrix[y][x] == 6){
                                let soil = new Soil(x, y)
                                soilArray.push(soil)
                        }
                    
                }
        }

}

side = 40;

function depict() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if(matrix[y][x] == 2){
                                fill("yellow")
                        } else if(matrix[y][x] == 3){
                                fill("red")
                        } else if(matrix[y][x] == 4){
                                fill("orange")
                        } else if(matrix[y][x] == 5){
                                fill("blue")
                        } else if(matrix[y][x] == 6){
                                fill("brown")
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


let side = 40;

//creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArray =[];
let fireArray = [];
let waterArray = [];
let soilArray = [];

// function setup() {
//         frameRate(15);

//         createCanvas(matrix[0].length * side, matrix.length * side);
//         for (let y = 0; y < matrix.length; y++) {
//                 for (let x = 0; x < matrix[0].length; x++) {
//                         if (matrix[y][x] == 1) {
//                                 let gr = new Grass(x, y)
//                                 grassArray.push(gr)
//                         } else if(matrix[y][x] == 2){
//                                 let grEat = new GrassEater(x, y)
//                                 grassEaterArr.push(grEat)
//                         } else if(matrix[y][x] == 3){
//                                 let pred = new Predator(x, y)
//                                 predatorArray.push(pred)
//                         } else if (matrix [y][x] == 4){
//                                 let fire = new Fire(x, y)
//                                 fireArray.push(fire)
//                         } else if (matrix[y][x] == 5){
//                                 let water = new Water(x, y)
//                                 waterArray.push(water)
//                         } else if(matrix[y][x] == 6){
//                                 let soil = new Soil(x, y)
//                                 soilArray.push(soil)
//                         }
                    
//                 }
//         }

// }

// function draw() {
//         for (let y = 0; y < matrix.length; y++) {
//                 for (let x = 0; x < matrix[y].length; x++) {
//                         if (matrix[y][x] == 1) {
//                                 fill("green")
//                         } else if(matrix[y][x] == 2){
//                                 fill("yellow")
//                         } else if(matrix[y][x] == 3){
//                                 fill("red")
//                         } else if(matrix[y][x] == 4){
//                                 fill("orange")
//                         } else if(matrix[y][x] == 5){
//                                 fill("blue")
//                         } else if(matrix[y][x] == 6){
//                                 fill("brown")
//                         }
//                         else{
//                                 fill("grey")
//                         }
//                         rect(x * side, y * side, side, side)
//                 }
//         }

        for(let i in grassArray){
                grassArray[i].mul()
        }

        for(let i in grassEaterArr){

                grassEaterArr[i].eat()
        }

        for(let i in predatorArray){

                predatorArray[i].eat()
        }

        for(let i in fireArray){

                fireArray[i].mul()
        }

        for(let i in waterArray){

                waterArray[i].eat()
        }

        for(let i in soilArray){

                soilArray[i].eat()
        }
      
// }
