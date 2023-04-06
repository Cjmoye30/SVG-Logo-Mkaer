const Component = require("./component")

class Square extends Component {
    constructor(w, h, fill, text) {
        super()
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.text = text;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M10 10"/>
        
        <rect width="${this.w}%" height="${this.h}%" fill="${this.fill}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        
        </svg>`
    }
}

module.exports = Square;