function generationRandom() {
    current.wall = false;
    var next = current.randomNeighbor();
    if (next != undefined) {
        next.wall = false;
        stack.push(next);
        removeWall(current, next);
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
    if (!stack.length) {
        console.log("End of maze generation")
        current = grid[0][0];
        runMazeGeneration = false;
    }
}

function removeWall(a, b) {
    if (a.i - b.i == 2) grid[a.i - 1][a.j].wall = false;    //Left
    if (a.i - b.i == -2) grid[a.i + 1][a.j].wall = false;   //Right
    if (a.j - b.j == 2) grid[a.i][a.j - 1].wall = false;    //Top
    if (a.j - b.j == -2) grid[a.i][a.j + 1].wall = false;   //Bottom
}