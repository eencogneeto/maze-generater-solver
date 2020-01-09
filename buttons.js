function startMazeGeneration() {
    if (!processRunning) {
        runMazeGeneration = true;
        processRunning = true;
        loop();
    }
}

function addHoles() {
    for (aaa=0; aaa<50; aaa++) {
        current = grid[Math.floor(random(cols))][Math.floor(random(rows))];
        current.wall = false;
    }
    current = grid[0][0];
}

function clearMaze() {
    loop();
    clear();
    newArray();
    runMazeGeneration = false;
    processRunning = false;
    // noLoop();
    
    resetSolve();
    // newVisitedArray();
    // newPreviousArray();
    // stack = [];
    // priorityQueue = new PriorityQueue();
    // runSolveDFS = false;
    // runSolveBFS = false;
    // runSolveBestFirstSearch = false;
    // runHighlightPath = false;
    loop();
}

function stopAnimation() {
    noLoop();
}

function resumeAnimation() {
    loop();
}

function redrawButton() {
    redraw(); // for step by step, must do a noLoop() first
}

function setDrawErase() {
    erase = !erase;
}

function startSolveDFS() {
    console.log("dfs button press");
    if (!processRunning) {
        resetSolve();
        clearHighlightPath();
        runSolveDFS = true;
        processRunning = true;
        loop();
    }
}

function startSolveBFS() {
    console.log("bfs button press")
    if (!processRunning) {
        resetSolve();
        clearHighlightPath();
        runSolveBFS = true;
        processRunning = true;
        loop();
    }
}

function startSolveBestFirstSearch() {
    console.log("best first search button press")
    if (!processRunning) {
        resetSolve();
        clearHighlightPath();
        runSolveBestFirstSearch = true;
        processRunning = true;
        loop();
    }
}

function resetSolve() {
    newVisitedArray();
    newPreviousArray();
    stack = [];
    priorityQueue = new PriorityQueue();
    runSolveDFS = false;
    runSolveBFS = false;
    runSolveBestFirstSearch = false;
    runHighlightPath = false;
}

function clearHighlightPath() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].path = false;
        }
    }
}