const Component = require("./component")

class Triangle extends Component {
    constructor(fill) {
        super();
        this.fill = fill;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`
    }
}

module.exports = Triangle;