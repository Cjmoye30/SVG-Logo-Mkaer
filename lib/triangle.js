const Component = require("./component")

class Triangle extends Component {
    constructor(fill, text, textColor) {
        super();
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <path d="M10 10"/>
        
        <polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`;
    }
}

module.exports = Triangle;