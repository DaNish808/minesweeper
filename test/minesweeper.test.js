const { assert } = require('chai');
const Minesweeper = require('../game/minesweeper.js');

describe('core game', () => {
  let game;

  describe('properties', () => {
    before(() => {
      game = new Minesweeper();
    });

    it('starts wins/losses at 0', () => {
      assert.deepStrictEqual(game.record.wins, 0, 'wins aren\'t 0');
      assert.deepStrictEqual(game.record.losses, 0, 'losses aren\'t 0');
    });
  })

  describe('generate grid method', () => {
    before(() => {
      game = new Minesweeper();
    });

    it('creates a grid of the desired number of rows and columns', () => {
      assert.isUndefined(game.grid, 'grid is not undefined');
      game.generateGrid();
      assert.isArray(game.grid, 'grid is not array');
      assert.strictEqual(game.grid.length, game.options.gridDimensions.rows, 'incorrect number of rows');
      assert.strictEqual(game.grid[0].length, game.options.gridDimensions.columns, 'incorrect number of columns');
    });

    it('contains the correct number of mines', () => {
      const numMinesActual = game.grid.reduce(
        (totalSum, row) => totalSum += row.reduce(
          (rowSum, tile) => rowSum += tile.mine ? 1 : 0, 
          0
        ), 
        0
      );
      assert.strictEqual(numMinesActual, game.options.numMines, 'incorrect number of mines');
    });
  });
});