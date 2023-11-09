// colors init
let BLACK = [0, 0, 0];

let box = document.getElementById('box');
let heading = document.querySelector('h1');

let boxHeight = (document.documentElement.clientHeight - heading.offsetHeight) - 100;
let boxWidth = boxHeight;

box.style.height = boxHeight + 'px';
box.style.width = boxWidth + 'px';

// centering the box
let boxLeftOffset = (document.documentElement.clientWidth - box.offsetWidth) / 2;
box.style.left = boxLeftOffset + 'px';

// making the y axis
let spaceBtwAxisAndBox = 10;
let boxCenterX = box.clientWidth / 2;
let boxCenterY = box.clientHeight / 2;

for (let i = spaceBtwAxisAndBox + 1; i < box.clientHeight - spaceBtwAxisAndBox; i++){
    plotSinglePixel(boxCenterX, i, BLACK);
}

// making the x axis

for (let i = spaceBtwAxisAndBox + 1; i < box.clientWidth - spaceBtwAxisAndBox; i++){
    plotSinglePixel(i, boxCenterY, BLACK);
}

/**
 * 
 * @param {number} x the x coordinate
 * @param {number} y the y coordinate
 * @param {Array} color the array having rgb value
 */
function plotSinglePixel(x, y, color){
    if (x < 0 || x >= box.clientWidth || y < 0 || y >= box.clientHeight) return null;

    let boxRect = box.getBoundingClientRect();
    let pixel = document.createElement('div');
    pixel.setAttribute('data-pixel', 1)

    pixel.style.position = 'absolute';
    pixel.style.height = '1px';
    pixel.style.width = '1px';

    let previousElement = document.elementFromPoint(x + boxRect.left + 1, y + boxRect.top + 1);  // 1 was added for border
    if (previousElement.hasAttribute('data-pixel')) previousElement.remove();

    box.append(pixel);

    pixel.style.top = y + 'px';
    pixel.style.left = x + 'px';
    pixel.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

/**
 * 
 * @param {Array} coefficients array of coefficients of x when the equation is expressed in terms of x
 * for example for equation y = 3 * x^2 + 5 the array will be [3, 0, 5]
 */
function plotGraph(coefficients){
    let xAxisLength = box.clientWidth - (2 * spaceBtwAxisAndBox);
    let yAxisLength = box.clientHeight - (2 * spaceBtwAxisAndBox);

    // ploting for negative value of x axis
    for (let i = 1; i < xAxisLength / 2; i++){
        let y = 0;
        for (let j = 0; j < coefficients.length; j++){
            y += ((i*-1) ** j) * coefficients[j];
        }

        plotSinglePixel(spaceBtwAxisAndBox + (xAxisLength/2 - i), spaceBtwAxisAndBox + (yAxisLength/2 - y), BLACK);
    }

    // ploting for positive value of x axis including 0
    for (let i = 0; i < xAxisLength / 2; i++){
        let y = 0;
        for (let j = 0; j < coefficients.length; j++){
            y += (i ** j) * coefficients[j];
        }

        plotSinglePixel(spaceBtwAxisAndBox + xAxisLength/2 + i, spaceBtwAxisAndBox + (yAxisLength/2 - y), BLACK);
    }
}

plotGraph([0, 0, 1]);