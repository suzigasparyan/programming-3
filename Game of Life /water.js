class Water {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 5
        this.directions = []
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
        var found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

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
        let food = random(foods)

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
        let newCell = random(emptyCell);

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

