function handleArrays() {
    var arraySize = prompt("How many elements?");
    var array = [];
    for (var i = 0; i < arraySize; i++) {
        array[i] = prompt("Element " + (i + 1) + ":");
    }
    console.log(array);
    document.getElementById("message").innerHTML = "Now, let's do matrices!";
}

function handleMatrix() {
    var rows = prompt("How many rows?");
    var cols = prompt("How many columns?");
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < cols; j++) {
            matrix[i][j] = prompt("Element at " + (i + 1) + "," + (j + 1));
        }
    }
    console.log(matrix);
    document.getElementById("message").innerHTML = "Now, let's find some multiples!";
}

function handleMultiples() {
    var firstNum = prompt("Enter the first number:");
    var secondNum = prompt("Enter the second number:");
    console.log("Multiples of " + firstNum + " from 1 to " + secondNum + ":");
    for (var i = 1; i <= secondNum; i++) {
        if (i % firstNum == 0) {
            console.log(i);
        }
    }
    document.getElementById("message").innerHTML = "Check console now!!";
}



//                                                     _________        __________
//      |            |     |\            _______           |           | 
//      |            |     | \          /                  |           |
//      |            |     |  \        /                   |           |
//      |     /\     |     |___\      /_________           |           |________
//      |    /  \    |     |    \              \           |           |
//      |   /    \   |     |     \             /           |           |
//      |  /      \  |     |      \           /            |           |
//      | /        \ |     |       \    _____/         ____|____       |
