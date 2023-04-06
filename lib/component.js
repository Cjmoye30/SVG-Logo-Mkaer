class Component {

    constructor(text, fill, textColor) {
        this.text = text;
        this.fill = fill;
        this.textColor = textColor;
    }
}

class Circle extends Component {
    
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <path d="M10 10"/>
        
        <circle cx="150" cy="100" r="80" fill="${this.fill}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>
        `;
    }
}

// bring in all the shapes to this file and rename this to shapes
module.exports = {Circle}
