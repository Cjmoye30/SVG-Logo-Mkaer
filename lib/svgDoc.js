const Shapes = require('./shapes');

function createSVG(shape) {
    const shape = Shapes();
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

    <path d="M10 10"/>
  
    ${shape}
  
  </svg>
  `
}

module.exports = { createSVG };

