class Shapes {
    constructor(){
      this.color = "color "  
    }
setColor(color) {
    this.color = color 
}
};

class Triangle extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<circle points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Square extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

module.exports = {Shapes, Triangle, Circle, Square}
