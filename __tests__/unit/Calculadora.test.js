const Calculadora = require('../../src/Calculadora')

describe("Testes Calculadora", () => {
  let calc

  beforeEach(() => {
    calc = new Calculadora()
  })

  test("Soma de 5 + 5", () => {
    const resultado = calc.add(5, 5)

    expect(resultado).toBe(10)
  })

  it("Subtração de 10 - 5", () => {
    const resultado = calc.sub(10, 5)

    expect(resultado).toEqual(5)
  })

  test("Multiplicação de 2 * 10", () => {
    const resultado = calc.mult(2, 10)
    expect(resultado).toEqual(20)
  })

  test("Divisão 5 / 3", () => {
    const resultado = calc.div(5, 3)
    expect(resultado).toBeCloseTo(1.67)
  })

  test("Deve retornar um excessão por ser uma divisão por 0", () => {
    expect(() => {
      calc.div(20, 0)
    }).toThrow("Divisão por zero!")
  })

  test("Potência de 2 ^ 8 ", () => {
    const result = calc.pow(2, 8)
    expect(result).toBe(256)
  })

  test("Deve retornar Indefinido, pois não existe a raiz quadrada de -25", () => {  
    expect(() => {
      calc.sqrt(-25)
    }).toThrow("Indefinido")
  })

  test("Raiz quadrada de 81", () => {
    const result = calc.sqrt(81)
    expect(result).toEqual(9)
  })


})