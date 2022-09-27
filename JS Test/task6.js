//Program that prints the name of the triangle based on the length of the sides in relation to one another

const side1 = 8
const side2 = 7
const side3 = 9

if (side1 === side2 && side2 === side3){
    console.log('Equilateral Triangle')
}
else if (side1 === side2 || side2 === side3 || side1 === side3){
    console.log('Isosceles Triangle')
}
else {
    console.log('Scalene Triangle')
}