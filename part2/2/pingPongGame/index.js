let box = document.getElementById('box');
let heading = document.querySelector('h1');

let boxHeight = (document.documentElement.clientHeight - heading.offsetHeight) - 100;
let boxWidth = boxHeight;

box.style.height = boxHeight + 'px';
box.style.width = boxWidth + 'px';

// centering the box
let boxLeftOffset = (document.documentElement.clientWidth - box.offsetWidth) / 2;
box.style.left = boxLeftOffset + 'px';

let boxRect = box.getBoundingClientRect();

let barHeight = boxRect.height * 0.15;
let barWidth = 10;

let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');

bar1.style.height = barHeight + 'px';
bar1.style.width = barWidth + 'px';

bar2.style.height = barHeight + 'px';
bar2.style.width = barWidth + 'px';
bar2.style.left = box.clientWidth - bar2.offsetWidth + 'px';

let bar1IntervalId;
bar1.addEventListener('mousedown', event => {
    bar1IntervalId = setInterval(() => {
        bar1.dispatchEvent(new CustomEvent('updateCoords', {
            detail: {
                updatedTop: event.clientY - (boxRect.top + box.clientTop) + 'px'
            }
        }));
    })
});

document.addEventListener('mouseup', () => {
    if (!bar1IntervalId) return ;

    console.log('stoped');
    clearInterval(bar1IntervalId);
    bar1IntervalId = null;
})

bar1.addEventListener('updateCoords', event => {
    bar1.style.top = event.detail.updatedTop;
});