class Draw {
    constructor() {
        this.options = ['url("cherry.jpg")', 'url("raspberrie.jpg")', 'url("blueberry.jpg")'];

        let _result = this.drawResult();

        this.getDrawResult = () => _result;
    }

    drawResult() {
        let backgrounds = [];

        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            const background = this.options[index];
            backgrounds.push(background);
        }
        return backgrounds;
    }
}