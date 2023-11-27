var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.calculateArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    }());
    Shapes.Circle = Circle;
    var Rectangle = /** @class */ (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.calculateArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var circle = new Shapes.Circle(5);
console.log("Circle Area: ".concat(circle.calculateArea()));
var rectangle = new Shapes.Rectangle(4, 6);
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
