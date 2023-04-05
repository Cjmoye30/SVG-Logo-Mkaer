const Component = require("./component")

class Circle extends Component {
    constructor(cx, cy, r, fill) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    }
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
}

module.exports = Circle;