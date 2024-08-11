class Parallax {
    _settings = {
        scale: 1
    }

    constructor(n, options) {
        Object.assign(this._settings, options);
        this.init(n);
    }

    init(n) {
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
            let moveX = (e.x - window.innerWidth / 2) / 5;
            let moveY = (e.y - window.innerHeight / 2) / 5;

            // set scale
            [moveX, moveY] = [-moveX * this._settings.scale, -moveY * this._settings.scale];

            this.element.style.translate = `${moveX}px ${moveY}px`;
        });
    }
}