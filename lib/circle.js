const Component = require("./component")

class Circle extends Component {
    constructor(cx, cy, r, fill, text, textColor) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M10 10"/>

        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `;
    }
}

module.exports = Circle;