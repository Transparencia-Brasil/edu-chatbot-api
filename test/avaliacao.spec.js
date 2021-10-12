const chai = require("chai");
const expect = chai.expect;

const {
  calcularPontuacaoFaseAulas,
  calcularPontuacaoFaseInfra,
  calcularPontuacaoTotal
} = require("../src/scripts/avaliacao");
const {
  respostaVazia,
  respostaAulaSemprePositivo,
  respostaAulaSempreNegativo,
  respostaAulaMeioTermo,
  respostaAulaZero
} = require("./mock/respostas.js");

describe("Calculo de pontuação", () => {

  it("Com respostas vazias", () => {
    expect(calcularPontuacaoFaseAulas(respostaVazia)).to.be.equal(0);
    expect(calcularPontuacaoFaseInfra(respostaVazia)).to.be.equal(0);
    expect(calcularPontuacaoTotal(respostaVazia)).to.be.equal(0);
  });

  it("Fase aulas com pontuação máxima", () => {
    expect(calcularPontuacaoFaseAulas(respostaAulaSemprePositivo)).to.be.equal(4);
  });

  it("Fase aulas com pontuação mínima", () => {
    expect(calcularPontuacaoFaseAulas(respostaAulaSempreNegativo)).to.be.equal(-5);
  });

  it("Fase aulas com pontuação meio termo", () => {
    expect(calcularPontuacaoFaseAulas(respostaAulaMeioTermo)).to.be.equal(-1);
  });

  it("Fase aulas com pontuação 'Não sei responder'", () => {
    expect(calcularPontuacaoFaseAulas(respostaAulaZero)).to.be.equal(0);
  });

});