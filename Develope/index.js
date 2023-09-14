const {Shapes, Circle, Triangle, Square} = require("./lib/shapes")
const inquirer = require("inquirer")

const questions = [
    {
    name:"shapeColor",
    type:"list",
    message:"What color do you want",
    choices:["Green", "Yellow", "Blue", "Red"]
},
    {
    name:"shape",
    type:"list",
    message:"shape do you want",
    choices:["Circle", "Triangle", "Square"]
},
]


const shape1 = new Triangle()
const shape2 = new Circle()
const shape3 = new Square()


shape1.setColor(color);
shape2.setColor(color);
shape3.setColor(color);

inquirer.prompt(questions).then(answers => {
    console.log(answers)

})




// console.log(myCar)
// console.log(yourCar)

// yourCar.drive(5)


// console.log(yourCar)

