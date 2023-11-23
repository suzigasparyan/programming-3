let LivingCreature = require('./LivingCreature')

module.exports = class Water extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 5
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
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let water = new Water(newX, newY)
            waterArray.push(water)



        }
    }

    eat() {
        let foods = this.chooseCell(1)
        let food = foods[Math.floor(Math.random() * foods.length)];

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in fireArray) {
                if (newX == fireArray[i].x && newY == fireArray[i].y) {
                    fireArray.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 10) {
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


            matrix[newY][newX] = 5;
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

        for (let i in waterArray) {
            if (this.x == waterArray[i].x && this.y == waterArray[i].y) {
                waterArray.splice(i, 1);
                break;
            }
        }
    }
}

