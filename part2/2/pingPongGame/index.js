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

class Bar {
    constructor(barDiv, height, width, isLeft){
        this.bar = barDiv;

        this.bar.style.height = height + 'px';
        this.bar.style.width = width + 'px';
        
        if (!isLeft) this.bar.style.left = box.clientWidth - this.bar.offsetWidth + 'px';

        this.#makeBarScrollable(isLeft);
    }

    #makeBarScrollable(isLeft){
        let isBarMouseDown = false;
    
        this.bar.addEventListener('mousedown', () => {
            isBarMouseDown = true;
        });
    
        document.addEventListener('mouseup', () => {
            if (isBarMouseDown) isBarMouseDown = false;
        });
    
        document.addEventListener('mousemove', event => {
            if (!isBarMouseDown) return ;
    
            let boxTop = event.clientY - (boxRect.top + box.clientTop);
    
            if (boxTop > this.bar.offsetHeight/2 && boxTop < box.clientHeight - this.bar.offsetHeight/2){
                this.bar.style.top = boxTop - this.bar.offsetHeight/2 + 'px';
            }

            document.dispatchEvent(new CustomEvent('barmoved', {
                bubbles: true,
                detail: {
                    isLeftBar: isLeft,
                    top: boxTop - this.bar.offsetHeight/2
                }
            }));
        });
    }
}

let bar1 = new Bar(document.getElementById('bar1'), barHeight, barWidth, true);
let bar2 = new Bar(document.getElementById('bar2'), barHeight, barWidth, false);

class Ball {
    constructor(ballDiv, initBar){
        this.ball = ballDiv;
        let size = boxRect.height * 0.05;

        this.ball.style.height = size + 'px';
        this.ball.style.width = size + 'px';
        this.ball.style.borderRadius = size/2 + 'px';

        this.inMovingState = false;
        this.#matchHeightWithBar(initBar);
        
        document.addEventListener('barmoved', event => {
            if (!event.detail.isLeftBar) return ;

            this.#matchHeightWithBar(initBar);
        });
    }

    #matchHeightWithBar(initBar){
        let barRect = initBar.bar.getBoundingClientRect()
        this.ball.style.top = barRect.top + barRect.height/2 - (this.ball.offsetHeight/2 + boxRect.top) + 'px';
        this.ball.style.left = initBar.bar.offsetWidth + 1 + 'px';
    }
}

let ball = new Ball(document.getElementById('ball'), bar1);