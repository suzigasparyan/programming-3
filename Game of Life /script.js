function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorcount, firecount, waterCount, soilCount) {
        let matrix = [];
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0);
                }
        }

        //Grass
        for (let i = 0; i < grassCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 1
                 }

                
        }

         //GrassEater
         for (let i = 0; i < grassEaterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 2
                 }      
        }

          //Predator
          for (let i = 0; i < predatorcount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 3
                 }
                }

        //Fire
        for (let i = 0; i < firecount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 4
                 }
                }

        //Water
        for (let i = 0; i < waterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 5
                 }
                }

        //Soil
        for (let i = 0; i < soilCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                 if(matrix[y][x] == 0){
                          matrix[y][x] = 6
                 }
                }



        return matrix;
}

let matrix = matrixGenerator(20, 30, 8, 4, 20, 8, 4);
let side = 40;

//creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArray =[];
let fireArray = [];
let waterArray = [];
let soilArray = [];

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

function draw() {
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
      
}

console.log("Hello, world");