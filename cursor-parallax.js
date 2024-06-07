class Parallax {
    _settings = {
        orientation: 0,     // positive: 1 / negative: 2
        scale: 1
    }
    
    constructor(n, options) {
        this.initElement(n);
        Object.assign(this._settings, options);
    }

    initElement(n) {
        if (n === undefined || n === null || n.trim() === '') {
            console.error('Can not get Element: ElementName is not given.');
            return;
        }
        this.element = document.querySelector(n);
        if (this.element === undefined) {
            console.error('Target element is undefined.');
            return;
        }
        this.startParallax();
    }

    startParallax() {
        document.addEventListener("mousemove", (e) => {
            let moveX = (e.x - window.innerWidth / 2) / 50;
            let moveY = (e.y - window.innerHeight / 2) / 50;

            // determining element's direction
            if (this._settings.orientation === 0) [ moveX, moveY ] = [ -moveX, -moveY ];
            // set scale
            [ moveX, moveY ] = [ moveX * this._settings.scale, -moveY * this._settings.scale ];

            this.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
}