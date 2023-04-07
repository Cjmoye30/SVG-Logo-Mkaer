class Shapes {
    constructor(text, fill, textColor) {
        this.text = text;
        this.fill = fill;
        this.textColor = textColor;
        this.svgReqs = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M10 10"/>`
    }
}

class Circle extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

class Triangle extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

class Square extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <rect width="100%" height="100%" fill="${this.fill}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}
module.exports = {Circle, Triangle, Square}