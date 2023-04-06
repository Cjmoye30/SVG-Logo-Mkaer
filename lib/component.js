class Component {

    constructor() {
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        throw new Error("Data must implement a render() method.")
    }

}

module.exports = Component;


// bring in all the shapes to this file and rename this to shapes

