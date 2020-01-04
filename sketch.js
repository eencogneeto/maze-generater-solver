var w = 10;
var cols, rows;
var grid;
var current;
var stack = [];
var visitedArray;


var runMazeGeneration = false;
var runSolveDFS = false;

function setup() {
    // frameRate(60);

    createCanvas(1010, 610);
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);

    newArray();

    newVisitedArray()

    noLoop();
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
}

function newVisitedArray() {
    visitedArray = new Array(cols).fill(
        new Array(rows).fill(false),
    );
    
    // Testing
    visitedArray[10][10] = true;
    console.log(visitedArray);
}

// function removeWall(a, b) {
//     if (a.i - b.i == 2) grid[a.i - 1][a.j].wall = false;    //Left
//     if (a.i - b.i == -2) grid[a.i + 1][a.j].wall = false;   //Right
//     if (a.j - b.j == 2) grid[a.i][a.j - 1].wall = false;    //Top
//     if (a.j - b.j == -2) grid[a.i][a.j + 1].wall = false;   //Bottom
// }