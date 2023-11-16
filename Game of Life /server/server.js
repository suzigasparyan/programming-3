var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

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

    io.sockets.emit('send matrix', matrix)

let grassArray = [];
let grassEaterArr = [];
let predatorArray =[];
let fireArray = [];
let waterArray = [];
let soilArray = [];

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Fire = require("./fire")
Soil = require("./soil")
Water = require("./water")

function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
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
    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
}