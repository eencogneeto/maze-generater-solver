function startMazeGeneration() {
    runMazeGeneration = true;
    loop();  
}

function clearMaze() {
    loop();
    clear();
    newArray();
    noLoop();
    runMazeGeneration = false;
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