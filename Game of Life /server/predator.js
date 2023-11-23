let LivingCreature = require('./LivingCreature')

module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 8
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character)
    }

    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3

            let pred = new Predator(newX, newY)
            predatorArray.push(pred)



        }
    }

    eat() {
        let foods = this.chooseCell(1, 2)
        let food = foods[Math.floor(Math.random() * foods.length)];
        
        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 12) {
                this.mul()
            }



        } else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in predatorArray) {
            if (this.x == predatorArray[i].x && this.y == predatorArray[i].y) {
                predatorArray.splice(i, 1);
                break;
            }
        }
    }


}

