class Shapes {
    constructor(text, fill, textColor) {
        this.text = text;
        this.fill = fill;
        this.textColor = textColor;

        // text strings
        this.svgReqs = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M10 10"/>`;
        this.textString = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
}

class Circle extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
        ${this.textString}
        </svg>
        `;
    }
}

class Triangle extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>
        ${this.textString}
        </svg>
        `;
    }
}

class Square extends Shapes {
    render() {
        return `
        ${this.svgReqs}
        <rect width="100%" height="100%" fill="${this.fill}"/>
        ${this.textString}
        </svg>
        `;
    }
}

module.exports = {Circle, Triangle, Square}
