function solveBestFirstSearch() {
    console.log("best first search pass");

    visitedArray[current.i][current.j] = true;

    if (current.i == cols - 1 && current.j == rows - 1) {
        console.log("Reached destination");
        // highlightPath();
        runSolveBestFirstSearch = false;
        runHighlightPath = true;
        priorityQueue = new PriorityQueue();
        return undefined;
    }

    if (current.i > 0 && !visitedArray[current.i - 1][current.j] && !grid[current.i - 1][current.j].wall) {
        priorityQueue.enqueue(grid[current.i - 1][current.j], heuristicManhattan(current.i - 1, current.j));
        previousArray[current.i - 1][current.j] = [current.i, current.j];
    }
    if (current.i < cols - 1 && !visitedArray[current.i + 1][current.j] && !grid[current.i + 1][current.j].wall) {
        priorityQueue.enqueue(grid[current.i + 1][current.j], heuristicManhattan(current.i + 1, current.j));
        previousArray[current.i + 1][current.j] = [current.i, current.j];
    }
    if (current.j > 0 && !visitedArray[current.i][current.j - 1] && !grid[current.i][current.j - 1].wall) {
        priorityQueue.enqueue(grid[current.i][current.j - 1], heuristicManhattan(current.i, current.j - 1));
        previousArray[current.i][current.j - 1] = [current.i, current.j];
    }
    if (current.j < rows - 1 && !visitedArray[current.i][current.j + 1] && !grid[current.i][current.j + 1].wall) {
        priorityQueue.enqueue(grid[current.i][current.j + 1], heuristicManhattan(current.i, current.j + 1));
        previousArray[current.i][current.j + 1] = [current.i, current.j];
    }

    if (priorityQueue.isEmpty()) {
        console.log("End of solve Best First Search")
        current = grid[0][0];
        runSolveBestFirstSearch = false;
    } else {
        var _current = priorityQueue.dequeue();
        current = _current.element;
    }
}

function heuristicManhattan(col, row) {
    return Math.pow(cols - col, 2) + Math.pow(rows - row, 2);
}
