function startMazeGeneration() {
    runMazeGeneration = true;
    loop();  
}

function clearMaze() {
    loop();
    clear();
    newArray();
    newVisitedArray();
    newPreviousArray();
    noLoop();
    stack = [];
    runMazeGeneration = false;
    runSolveDFS = false;
    runSolveBFS = false;
    runHighlightPath = false;
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

function startSolveDFS() {
    console.log("dfs button press")
    runSolveDFS = true;
    loop();
}

function startSolveBFS() {
    console.log("bfs button press")
    runSolveBFS = true;
    loop();
}