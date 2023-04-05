const Component = require("./component")

class Square extends Component {
    constructor(w, h, fill) {
        super()
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    render() {
        return `<rect width="${this.w}%" height="${this.h}%" fill="${this.fill}" />`
    }
}

module.exports = Square;