class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.wall = true;
    }

    show() {
        noStroke();
        if (this.i == 0 && this.j == 0) {
          fill(0, 255, 0);
        } else if (this.i == 100 && this.j == 60) {
          fill(0, 255, 0);
        } else if (this == current) {
          fill(255, 0, 0);
        } else if (this.wall) {
          fill(0);
        } else {
          fill(255);
        }
        rect(this.i * w, this.j * w, w, w);
    }
    
    randomNeighbor() {
        var neighbors = [];
    
        if (this.i > 1 && grid[this.i - 2][this.j].wall) neighbors.push(grid[this.i - 2][this.j]);
        if (this.i < cols - 2 && grid[this.i + 2][this.j].wall) neighbors.push(grid[this.i + 2][this.j]);
        if (this.j > 1 && grid[this.i][this.j - 2].wall) neighbors.push(grid[this.i][this.j - 2]);
        if (this.j < rows - 2 && grid[this.i][this.j + 2].wall) neighbors.push(grid[this.i][this.j + 2]);
    
        if (neighbors.length > 0) {
          var index = Math.floor(random(0, neighbors.length)); // Cannot use Math.random
          return neighbors[index];
        }
        return undefined;
    }
}