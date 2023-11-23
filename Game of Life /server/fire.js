let LivingCreature = require('./LivingCreature')

module.exports = class Fire extends LivingCreature{

    mul(){
        this.multiply++
        let emptyCells = super.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];


          if(newCell && this.multiply >= 8){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            let gr = new Fire(newX, newY);
            fireArray.push(gr);

            this.multiply = 0;
          }
    }
}
    