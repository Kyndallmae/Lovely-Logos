// class Car {
//     constructor(passedMake){
//         this.wheels=4
//         this.make = passedMake
//         this.new = true
//         this.miles=0
//     }

//     drive(miles){
//         this.new = false
//         this.miles += miles
//     }
// }

// class Motorcycle extends Car {
//     constructor (make){
//         super(make)
//         this.wheels = 2
//     }
// }




class Shapes {
    constructor(){
      this.color = ""  
    }
setColor(color) {
    this.color = color 
}

}

class Triangle extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<circle points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor (){
        super()
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = {Shapes, Triangle, Circle, Square}
