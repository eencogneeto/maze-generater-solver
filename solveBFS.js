function solveBFS() {
    console.log("bfs pass");

    visitedArray[current.i][current.j] = true;

    if (current.i == cols - 1 && current.j == rows - 1) {
        console.log("Reached destination");
        // highlightPath();
        runSolveBFS = false;
        runHighlightPath = true;
        stack = [];
        return undefined;
    }

    if (current.i > 0 && !visitedArray[current.i - 1][current.j] && !grid[current.i - 1][current.j].wall && !stack.includes(grid[current.i - 1][current.j])) {
        stack.push(grid[current.i - 1][current.j]);
        previousArray[current.i - 1][current.j] = [current.i, current.j];
    }
    if (current.i < cols - 1 && !visitedArray[current.i + 1][current.j] && !grid[current.i + 1][current.j].wall && !stack.includes(grid[current.i + 1][current.j])) {
        stack.push(grid[current.i + 1][current.j]);
        previousArray[current.i + 1][current.j] = [current.i, current.j];
    }
    if (current.j > 0 && !visitedArray[current.i][current.j - 1] && !grid[current.i][current.j - 1].wall && !stack.includes(grid[current.i][current.j - 1])) {
        stack.push(grid[current.i][current.j - 1]);
        previousArray[current.i][current.j - 1] = [current.i, current.j];
    }
    if (current.j < rows - 1 && !visitedArray[current.i][current.j + 1] && !grid[current.i][current.j + 1].wall && !stack.includes(grid[current.i][current.j + 1])) {
        stack.push(grid[current.i][current.j + 1]);
        previousArray[current.i][current.j + 1] = [current.i, current.j];
    }

    if (!stack.length) {
        console.log("End of solve BFS")
        current = grid[0][0];
        runSolveBFS = false;
        processRunning = false;
    } else {
        current = stack.shift();
    }
}
