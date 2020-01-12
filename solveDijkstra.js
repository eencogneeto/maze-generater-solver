// i shall just use the f Score Array for the cost array
// we can think of cost(n) as a case of f(n) = g(n) + h(n) where h(n) = 0
function solveDijkstra() {
    console.log("Dijkstra search pass");

    visitedArray[current.i][current.j] = true;

    if (current.i == cols - 1 && current.j == rows - 1) {
        console.log("Reached destination");
        // highlightPath();
        runSolveDijkstra = false;
        runHighlightPath = true;
        stack = [];
        return undefined;
    } else if (current.i == 0 && current.j == 0) {
        // i shall just use the f Score Array for the cost array.
        fScoreArray[0][0] = 0;
    }

    tentative_fScore = fScoreArray[current.i][current.j] + 1;

    if (current.i > 0 && !visitedArray[current.i - 1][current.j] && !grid[current.i - 1][current.j].wall && tentative_fScore < fScoreArray[current.i - 1][current.j]) {
        fScoreArray[current.i - 1][current.j] = tentative_fScore;
        stack.push(grid[current.i - 1][current.j]);
        previousArray[current.i - 1][current.j] = [current.i, current.j];
    }
    if (current.i < cols - 1 && !visitedArray[current.i + 1][current.j] && !grid[current.i + 1][current.j].wall && tentative_fScore < fScoreArray[current.i + 1][current.j]) {
        fScoreArray[current.i + 1][current.j] = tentative_fScore;
        stack.push(grid[current.i + 1][current.j]);
        previousArray[current.i + 1][current.j] = [current.i, current.j];
    }
    if (current.j > 0 && !visitedArray[current.i][current.j - 1] && !grid[current.i][current.j - 1].wall && tentative_fScore < fScoreArray[current.i][current.j - 1]) {
        fScoreArray[current.i][current.j - 1] = tentative_fScore;
        stack.push(grid[current.i][current.j - 1]);
        previousArray[current.i][current.j - 1] = [current.i, current.j];
    }
    if (current.j < rows - 1 && !visitedArray[current.i][current.j + 1] && !grid[current.i][current.j + 1].wall && tentative_fScore < fScoreArray[current.i][current.j + 1]) {
        fScoreArray[current.i][current.j + 1] = tentative_fScore;
        stack.push(grid[current.i][current.j + 1]);
        previousArray[current.i][current.j + 1] = [current.i, current.j];
    }

    if (!stack.length) {
        console.log("End of Dijkstra")
        current = grid[0][0];
        runSolveDijkstra = false;
        processRunning = false;
    } else {
        current = stack.shift();
    }
}