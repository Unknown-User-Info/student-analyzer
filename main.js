// STUDENT GRADE ANALYZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let studentGrades = [];
generateData(); // Initialize studentGrades
let max = 100; // studentGrades values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / studentGrades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < studentGrades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = studentGrades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Events
document.getElementById("new-data").addEventListener("click", generateData);

function generateData() {
    // Get number of students user wants and set studentGrades to random array with grades for each student
    let numStudents = Number(document.getElementById("num-students").value);
    studentGrades = createRandomGrades(numStudents);
    calcStats();
}

function createRandomGrades(n) {
    // Create and return an array with 'n' random whole number grades b/t 0 and 100, inclusive
    let tArray = [];
    for (let i = 0; i < n; i++) {
        tArray.push(Math.randomInt(0, 101));
    }

    return tArray;
}

function calcStats() {
    // Calculate and display statistics on student grades stored in studentGrades.
    document.getElementById("perfect-grade").innerHTML = includes(100, studentGrades);
    document.getElementById("lowest-grade").innerHTML = minItem(studentGrades);
    document.getElementById("highest-grade").innerHTML = maxItem(studentGrades);
    document.getElementById("ave-grade").innerHTML = arrayAverage(studentGrades);
}

//Includes function
function includes(number, arrayName) {
    for (n = 0; n < arrayName.length; n++) {
        if (arrayName[n] == number) {
            return true;
        } 
    }
    for (n = 0; n < arrayName.length; n ++) {
        if (arrayName[n] != number) {
            return false;
        }
    }
}

//Min function
function minItem(arrayName) {

    let minValue = 100;
    for (n = 0; n < arrayName.length; n++) {
        if (arrayName[n] < minValue) {
            minValue = arrayName[n]
        } else {
            minValue = minValue
        }
    }
    return minValue

}

//Max function
function maxItem(arrayName) {

    let maxValue = 0;
    for (n = 0; n < arrayName.length; n++) {
        if (arrayName[n] > maxValue) {
            maxValue = arrayName[n]
        } else {
            maxValue = maxValue
        }
    }
    return maxValue
}

//Average function
function arrayAverage(arrayName) {
    //Adding total
    let total = 0;
    for (n = 0; n < arrayName.length; n++) {
        total = total + arrayName[n]
    }
    //Average
    let average = total/arrayName.length;
    console.log(average)

    //Rounding
    average = average*10;
    average = Math.round(average);
    average = average/10;

    return average
}