namespace Shapes {
  export class Circle {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }

  export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    calculateArea() {
      return this.width * this.height;
    }
  }
}

const circle = new Shapes.Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Shapes.Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
