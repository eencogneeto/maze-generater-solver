function highlightPath() {
    // var prev_cols = cols - 1;
    // var prev_rows = rows - 1;

    // var prev_current = grid[prev_cols][prev_rows];

    if (current.i == 0 && current.j == 0) {
        runHighlightPath = false;
        console.log("Highlight Path Done")
        noLoop();
        return undefined;
    }

    console.log("Highlight Path Pass")
    current.path = true;
    current = grid[previousArray[current.i][current.j][0]][previousArray[current.i][current.j][1]];

}