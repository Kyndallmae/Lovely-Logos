const {Shapes, Circle, Triangle, Square} = require("./lib/shapes")
const inquirer = require("inquirer")
const color = ("color")
const fs = require('fs');
const svgContent = ("Shapes")

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

inquirer.prompt(questions).then(answers => {
    console.log(answers)
});

let newShape;
switch (Shapes) {
    case "Circle":
        newShape = new Circle();
        break;
    case "Triangle":
        newShape = new Triangle();
        break;
    case "Square":
        newShape = new Square();
        break;
    default:
        console.error("You need to pick a shape!");
        return;
}

fs.writeFileSync('logo.svg', svgContent);

