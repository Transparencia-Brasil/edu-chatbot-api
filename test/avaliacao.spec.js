const chai = require("chai");
const expect = chai.expect;

const {
  calcularPontuacaoFaseAulas,
  calcularPontuacaoFaseInfra,
  calcularPontuacaoTotal
} = require("../src/scripts/avaliacao");
const {
  respostaVazia,
  respostaSemprePositivo,
  respostaSempreNegativo,
  respostaMeioTermo,
  respostaZero
} = require("./mock/respostas.js");

describe("Calculo de pontuação", () => {

  it("Com respostas vazias", () => {
    expect(calcularPontuacaoFaseAulas(respostaVazia)).to.be.equal(0);
    expect(calcularPontuacaoFaseInfra(respostaVazia)).to.be.equal(0);
    expect(calcularPontuacaoTotal(respostaVazia)).to.be.equal(0);
  });

});

describe("Calculo de pontuação das perguntas sobre 'aulas'", () => {

  it("Fase aulas com pontuação máxima", () => {
    expect(calcularPontuacaoFaseAulas(respostaSemprePositivo)).to.be.equal(4);
  });

  it("Fase aulas com pontuação mínima", () => {
    expect(calcularPontuacaoFaseAulas(respostaSempreNegativo)).to.be.equal(-5);
  });

  it("Fase aulas com pontuação meio termo", () => {
    expect(calcularPontuacaoFaseAulas(respostaMeioTermo)).to.be.equal(-1);
  });

  it("Fase aulas com pontuação 'Não sei responder'", () => {
    expect(calcularPontuacaoFaseAulas(respostaZero)).to.be.equal(0);
  });

});

describe("Calculo de pontuação das perguntas sobre 'infra'", () => {

  it("Fase infra com pontuação máxima", () => {
    expect(calcularPontuacaoFaseInfra(respostaSemprePositivo)).to.be.equal(3);
  });

  it("Fase infra com pontuação mínima", () => {
    expect(calcularPontuacaoFaseInfra(respostaSempreNegativo)).to.be.equal(-4);
  });

  it("Fase infra com pontuação 'Não sei responder'", () => {
    expect(calcularPontuacaoFaseInfra(respostaZero)).to.be.equal(0);
  });

});