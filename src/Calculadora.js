class Calculadora {

  add(num1, num2) {
    return num1 + num2
  }

  sub(num1, num2) {
    return num1 - num2
  }

  mult(num1, num2) {
    return num1 * num2
  }

  div(num1, num2) {
    if (num2 === 0)
      throw Error("Divisão por zero!")

    return num1 / num2
  }

  pow(num1, num2) {
    return Math.pow(num1, num2)
  }

  sqrt(num) {
    if (num < 0) {
      throw 'Indefinido'
    }
    return Math.sqrt(num)
  }
}

module.exports = Calculadora