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
  respostaNaoSeiResponder,
  respostaZero,
  respostaEscolaDefensora,
  respostaEscolaAmeaca
} = require("./mock/respostas.js");

describe("Calculo de pontuação das perguntas sobre 'aulas'", () => {

  it("Fase aulas com pontuação máxima", () => {
    const avaliacao = calcularPontuacaoFaseAulas(respostaSemprePositivo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(4);
    expect(avaliacao.qtdRespostas).to.be.equal(5);
  });

  it("Fase aulas com pontuação mínima", () => {
    const avaliacao = calcularPontuacaoFaseAulas(respostaSempreNegativo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(-5);
    expect(avaliacao.qtdRespostas).to.be.equal(5);
  });

  it("Fase aulas com pontuação meio termo", () => {
    const avaliacao = calcularPontuacaoFaseAulas(respostaMeioTermo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(-1);
    expect(avaliacao.qtdRespostas).to.be.equal(3);
  });

  it("Fase aulas com pontuação 'Não sei responder'", () => {
    const avaliacao = calcularPontuacaoFaseAulas(respostaNaoSeiResponder);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(0);
    expect(avaliacao.qtdRespostas).to.be.equal(0);
  });

});

describe("Calculo de pontuação das perguntas sobre 'infra'", () => {

  it("Fase infra com pontuação máxima", () => {
    const avaliacao = calcularPontuacaoFaseInfra(respostaSemprePositivo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(3);
    expect(avaliacao.qtdRespostas).to.be.equal(3);
  });

  it("Fase infra com pontuação mínima", () => {
    const avaliacao = calcularPontuacaoFaseInfra(respostaSempreNegativo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(-4);
    expect(avaliacao.qtdRespostas).to.be.equal(3);
  });

  it("Fase infra com pontuação meio termo", () => {
    const avaliacao = calcularPontuacaoFaseInfra(respostaMeioTermo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(0);
    expect(avaliacao.qtdRespostas).to.be.equal(0);
  });

  it("Fase infra com pontuação 'Não sei responder'", () => {
    const avaliacao = calcularPontuacaoFaseInfra(respostaNaoSeiResponder);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(0);
    expect(avaliacao.qtdRespostas).to.be.equal(0);
  });

});

describe("Calculo de pontuação total", () => {

  it("Com respostas vazias", () => {
    const avaliacao = calcularPontuacaoTotal(respostaVazia);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(null);
    expect(avaliacao.resultado).to.be.equal('--');
    expect(avaliacao.qtdRespostas).to.be.equal(0);
  });

  it("Avaliação total com pontuação máxima", () => {
    const avaliacao = calcularPontuacaoTotal(respostaSemprePositivo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(7);
    expect(avaliacao.resultado).to.be.equal('Escola PROTETORA');
    expect(avaliacao.qtdRespostas).to.be.equal(8);
  });

  it("Avaliação total com pontuação mínima", () => {
    const avaliacao = calcularPontuacaoTotal(respostaSempreNegativo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(-9);
    expect(avaliacao.resultado).to.be.equal('Escola DE RISCO');
    expect(avaliacao.qtdRespostas).to.be.equal(8);
  });

  it("Avaliação total com pontuação meio termo", () => {
    const avaliacao = calcularPontuacaoTotal(respostaMeioTermo);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(null);
    expect(avaliacao.resultado).to.be.equal('--');
    expect(avaliacao.qtdRespostas).to.be.equal(3);
  });

  it("Avaliação total com pontuação 'Não sei responder'", () => {
    const avaliacao = calcularPontuacaoTotal(respostaZero);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(null);
    expect(avaliacao.resultado).to.be.equal('--');
    expect(avaliacao.qtdRespostas).to.be.equal(0);
  });

  it("Avaliação de Escola DEFENSORA", () => {
    const avaliacao = calcularPontuacaoTotal(respostaEscolaDefensora);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(4);
    expect(avaliacao.resultado).to.be.equal('Escola DEFENSORA');
    expect(avaliacao.qtdRespostas).to.be.equal(8);
  });

  it("Avaliação de Escola AMEAÇA", () => {
    const avaliacao = calcularPontuacaoTotal(respostaEscolaAmeaca);
    expect(avaliacao).to.have.own.property('pontuacao');
    expect(avaliacao).to.have.own.property('resultado');
    expect(avaliacao).to.have.own.property('qtdRespostas');
    expect(avaliacao.pontuacao).to.be.equal(1);
    expect(avaliacao.resultado).to.be.equal('Escola AMEAÇA');
    expect(avaliacao.qtdRespostas).to.be.equal(5);
  });

});