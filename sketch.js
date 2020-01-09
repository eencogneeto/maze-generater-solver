var w = 10;
var cols, rows;
var grid;
var current;
var stack = [];
var visitedArray;
var previousArray;
var priorityQueue = new PriorityQueue();

var runMazeGeneration = false;
var erase = false;
var runSolveDFS = false;
var runSolveBFS = false;
var runSolveBestFirstSearch = false;
var runHighlightPath = false;
var processRunning = false;

function setup() {
    // frameRate(60);

    createCanvas(770, 550);
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);

    newArray();

    newVisitedArray();

    newPreviousArray();

    // noLoop();
}

function draw() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }

    if (runMazeGeneration) {
        generationRandom();
    }

    if (runSolveDFS) {
        solveDFS();
    }

    if (runSolveBFS) {
        solveBFS();
    }

    if (runSolveBestFirstSearch) {
        solveBestFirstSearch();
    }

    if (runHighlightPath) {
        highlightPath();
    }
}

function mouseClicked() {
    let x = mouseX;
    let y = mouseY;

    grid[Math.floor(x/w)][Math.floor(y/w)].wall = !grid[Math.floor(x/w)][Math.floor(y/w)].wall;
}

function mouseDragged(event) {
    console.log(event);

    let x = mouseX;
    let y = mouseY;

    // grid[Math.floor(x/w)][Math.floor(y/w)].wall = !grid[Math.floor(x/w)][Math.floor(y/w)].wall;
    grid[Math.floor(x/w)][Math.floor(y/w)].wall = erase;
}
  

function newArray() {
    grid = new Array(cols);
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j);
        }
    }

    current = grid[0][0];
    console.log("New Array");
}

function newVisitedArray() {
    visitedArray = Array.from({ length: cols }, () => 
        Array.from({ length: rows }, () => false)
    );
   
    // The following code for initializing 2d array will not work
    // More info https://stackoverflow.com/questions/50002593/initialize-a-two-dimensional-array-in-javascript
    // visitedArray = new Array(cols).fill(
    //     new Array(rows).fill(false),
    // );
    console.log("New Visited Array");
    // visitedArray[0][2] = true;
    // console.log(visitedArray);
}

function newPreviousArray() {
    // previousArray = Array(cols).fill(null).map(()=>Array(rows).fill(null));
    previousArray = Array.from({ length: cols }, () => 
        Array.from({ length: rows }, () => null)
    );

    console.log("New Previous Array");
}

// function removeWall(a, b) {
//     if (a.i - b.i == 2) grid[a.i - 1][a.j].wall = false;    //Left
//     if (a.i - b.i == -2) grid[a.i + 1][a.j].wall = false;   //Right
//     if (a.j - b.j == 2) grid[a.i][a.j - 1].wall = false;    //Top
//     if (a.j - b.j == -2) grid[a.i][a.j + 1].wall = false;   //Bottom
// }