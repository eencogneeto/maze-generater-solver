var w = 10;
var cols, rows;
var grid;
var current;
var stack = [];

var started = false;

function setup() {
    createCanvas(1000, 600);
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);

    grid = new Array(cols);
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j);
        }
    }

    noLoop();

    current = grid[0][0];
}

function draw() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }

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
}

function myFunction() {
    started = true;
    loop();  
}

function removeWall(a, b) {
    if (a.i - b.i == 2) grid[a.i - 1][a.j].wall = false;    //Left
    if (a.i - b.i == -2) grid[a.i + 1][a.j].wall = false;   //Right
    if (a.j - b.j == 2) grid[a.i][a.j - 1].wall = false;    //Top
    if (a.j - b.j == -2) grid[a.i][a.j + 1].wall = false;   //Bottom
}