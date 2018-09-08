/* Util functions */
const randIntBelow = max => Math.floor(Math.random() * max);

function Minesweeper() {
  this.record = {
    wins: 0,
    losses: 0
  };
  this.options = {
    gridDimensions: {
      rows: 10,
      columns: 10
    },
    numMines: 20,
    timer: {
      on: false,
      limit: 300000 // 5 min
    }
  };
  this.grid;
}

Minesweeper.prototype.generateGrid = function() {
  const { 
    gridDimensions: { rows, columns }, 
    numMines 
  } = this.options;

  if(numMines >= rows * columns) throw('Too many mines.')

  this.grid = new Array(rows).fill(1).map(row => 
    new Array(columns).fill(1).map(tile => ({
      swept: false,
      mine: false
    })
  ));

  for(let i = 0; i < numMines; i++) {
    let occupied = true;
    while(occupied) {
      let r = randIntBelow(rows);
      let c = randIntBelow(columns);
      if(this.grid[r][c].mine === false) {
        occupied = false;
        this.grid[r][c].mine = true;
      }
    }
  }
};



module.exports = Minesweeper;