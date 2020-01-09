function solveAstar() {
    console.log("A star search pass");

    visitedArray[current.i][current.j] = true;

    if (current.i == cols - 1 && current.j == rows - 1) {
        console.log("Reached destination");
        // highlightPath();
        runSolveAstar = false;
        runHighlightPath = true;
        priorityQueue = new PriorityQueue();
        return undefined;
    } else if (current.i == 0 && current.j == 0) {
        // For node n, fScore[n] := gScore[n] + h(n)
        // gScore[n] is the cost of the cheapest path from start to n currently known
        fScoreArray[0][0] = heuristicManhattan(0, 0);
        gScoreArray[0][0] = 0;
    }

    tentative_gScore = gScoreArray[current.i][current.j] + 1;

    if (current.i > 0 && !grid[current.i - 1][current.j].wall && tentative_gScore < gScoreArray[current.i - 1][current.j]) {
        gScoreArray[current.i - 1][current.j] = tentative_gScore;
        fScoreArray[current.i - 1][current.j] = tentative_gScore + heuristicManhattan(current.i - 1, current.j);
        if (priorityQueue.containsElement(grid[current.i - 1][current.j])) {
            console.log("PQ CONTAINS ELEMENT");
            var priorityUpdated = priorityQueue.updatePriority(grid[current.i - 1][current.j], fScoreArray[current.i - 1][current.j]);
            if (priorityUpdated) {
                previousArray[current.i - 1][current.j] = [current.i, current.j];
            }
        } else {
            priorityQueue.enqueue(grid[current.i - 1][current.j], fScoreArray[current.i - 1][current.j]);
            previousArray[current.i - 1][current.j] = [current.i, current.j];
        }
    }
    if (current.i < cols - 1 && !grid[current.i + 1][current.j].wall && tentative_gScore < gScoreArray[current.i + 1][current.j]) {
        gScoreArray[current.i + 1][current.j] = tentative_gScore;
        fScoreArray[current.i + 1][current.j] = tentative_gScore + heuristicManhattan(current.i + 1, current.j);
        if (priorityQueue.containsElement(grid[current.i + 1][current.j])) {
            console.log("PQ CONTAINS ELEMENT");
            var priorityUpdated = priorityQueue.updatePriority(grid[current.i + 1][current.j], fScoreArray[current.i + 1][current.j]);
            if (priorityUpdated) {
                previousArray[current.i + 1][current.j] = [current.i, current.j];
            }
        } else {
            priorityQueue.enqueue(grid[current.i + 1][current.j], fScoreArray[current.i + 1][current.j]);
            previousArray[current.i + 1][current.j] = [current.i, current.j];
        }
    }
    if (current.j > 0 && !grid[current.i][current.j - 1].wall && tentative_gScore < gScoreArray[current.i][current.j - 1]) {
        gScoreArray[current.i][current.j - 1] = tentative_gScore;
        fScoreArray[current.i][current.j - 1] = tentative_gScore + heuristicManhattan(current.i, current.j - 1);
        if (priorityQueue.containsElement(grid[current.i][current.j - 1])) {
            console.log("PQ CONTAINS ELEMENT");
            var priorityUpdated = priorityQueue.updatePriority(grid[current.i][current.j - 1], fScoreArray[current.i][current.j - 1]);
            if (priorityUpdated) {
                previousArray[current.i][current.j - 1] = [current.i, current.j];
            }
        } else {
            priorityQueue.enqueue(grid[current.i][current.j - 1], fScoreArray[current.i][current.j - 1]);
            previousArray[current.i][current.j - 1] = [current.i, current.j];
        }
    }
    if (current.j < rows - 1 && !grid[current.i][current.j + 1].wall && tentative_gScore < gScoreArray[current.i][current.j + 1]) {
        gScoreArray[current.i][current.j + 1] = tentative_gScore;
        fScoreArray[current.i][current.j + 1] = tentative_gScore + heuristicManhattan(current.i, current.j + 1);
        if (priorityQueue.containsElement(grid[current.i][current.j + 1])) {
            console.log("PQ CONTAINS ELEMENT");
            var priorityUpdated = priorityQueue.updatePriority(grid[current.i][current.j + 1], fScoreArray[current.i][current.j + 1]);
            if (priorityUpdated) {
                previousArray[current.i][current.j + 1] = [current.i, current.j];
            }
        } else {
            priorityQueue.enqueue(grid[current.i][current.j + 1], fScoreArray[current.i][current.j + 1]);
            previousArray[current.i][current.j + 1] = [current.i, current.j];
        }
    }

    if (priorityQueue.isEmpty()) {
        console.log("End of solve A star Search")
        current = grid[0][0];
        runSolveAstar = false;
        processRunning = false;
    } else {
        var _current = priorityQueue.dequeue();
        current = _current.element;
    }
}