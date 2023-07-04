function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }




  class Triangle {
    constructor(a, b, d) {
      this.a = a;
      this.b = b;
      this.d = d;
      if (a + b < d || a + d < b || b + d < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
      get perimeter() {
          return Number(this.a + this.b + this.d);
      }
  
      get area() {
          let p = this.perimeter / 2;
          let ar = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.d)).toFixed(3));
          return ar;
      }
  }
  
  function getTriangle(a, b, d) {
    try {
      return new Triangle(a, b, d);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует"
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует"
        }
      }
    }
  }
  