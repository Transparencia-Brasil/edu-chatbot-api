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
  respostaZero,
  respostaEscolaDefensora,
  respostaEscolaAmeaca
} = require("./mock/respostas.js");

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

describe("Calculo de pontuação total", () => {

  it("Com respostas vazias", () => {
    expect(calcularPontuacaoFaseAulas(respostaVazia)).to.be.equal(0);
    expect(calcularPontuacaoFaseInfra(respostaVazia)).to.be.equal(0);

    const avaliacao = calcularPontuacaoTotal(respostaVazia);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(0);
    expect(avaliacao.resultado).to.be.equal('Escola AMEAÇA');
  });

  it("Avaliação total com pontuação máxima", () => {
    const avaliacao = calcularPontuacaoTotal(respostaSemprePositivo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(7);
    expect(avaliacao.resultado).to.be.equal('Escola PROTETORA');
  });

  it("Avaliação total com pontuação mínima", () => {
    const avaliacao = calcularPontuacaoTotal(respostaSempreNegativo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(-9);
    expect(avaliacao.resultado).to.be.equal('Escola DE RISCO');
  });

  it("Avaliação total com pontuação meio termo", () => {
    const avaliacao = calcularPontuacaoTotal(respostaMeioTermo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(-1);
    expect(avaliacao.resultado).to.be.equal('Escola AMEAÇA');
  });

  it("Avaliação total com pontuação 'Não sei responder'", () => {
    const avaliacao = calcularPontuacaoTotal(respostaZero);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(0);
    expect(avaliacao.resultado).to.be.equal('Escola AMEAÇA');
  });

  it("Avaliação de Escola DEFENSORA", () => {
    const avaliacao = calcularPontuacaoTotal(respostaEscolaDefensora);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(4);
    expect(avaliacao.resultado).to.be.equal('Escola DEFENSORA');
  });

  it("Avaliação de Escola AMEAÇA", () => {
    const avaliacao = calcularPontuacaoTotal(respostaEscolaAmeaca);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao.pontuacao).to.be.equal(-1);
    expect(avaliacao.resultado).to.be.equal('Escola AMEAÇA');
  });

});