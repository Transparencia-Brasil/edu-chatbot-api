const chai = require("chai");
const expect = chai.expect;

const {
  getDivergencias
} = require("../src/scripts/geradorCartas");

describe("Contrução de carta para gestores(as)", () => {

  it("Aluno respondeu que NÃO tem os 3 itens, mas diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Não",
      agua_lavar_maos: "Não",
      area_verde: "Não"
    }
    const escola = {
      in_patio_descoberto: 1,
      in_agua_potavel: 1,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(3);
    expect(textos[0]).to.be.equals('Não possui pátio descoberto');
    expect(textos[1]).to.be.equals('Não possui água potável');
    expect(textos[2]).to.be.equals('Não possui área verde');
  });

  it("Aluno respondeu que SIM pros 3 itens, mas diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Sim",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 0,
      in_area_verde: 0
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(3);
    expect(textos[0]).to.be.equals('Possui pátio descoberto');
    expect(textos[1]).to.be.equals('Possui água potável');
    expect(textos[2]).to.be.equals('Possui área verde');
  });

  it("Respondeu SSS, mas diverge do Censo em 2 itens", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Sim",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 1,
      in_area_verde: 0
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(2);
    expect(textos[0]).to.be.equals('Possui pátio descoberto');
    expect(textos[1]).to.be.equals('Possui área verde');
  });

  it("Respondeu NSS, mas diverge do Censo em 1 item", () => {
    const resposta = {
      patio_descoberto: "Não",
      agua_lavar_maos: "Sim",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 1,
      in_agua_potavel: 1,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(1);
    expect(textos[0]).to.be.equals('Não possui pátio descoberto');
  });

  it("Respondeu SNS, mas diverge do Censo em 3 itens", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Não",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 1,
      in_area_verde: 0
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(3);
    expect(textos[0]).to.be.equals('Possui pátio descoberto');
    expect(textos[1]).to.be.equals('Não possui água potável');
    expect(textos[2]).to.be.equals('Possui área verde');
  });

  it("Respondeu SSN, mas diverge do Censo em 3 itens", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Sim",
      area_verde: "Não"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 0,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(3);
    expect(textos[0]).to.be.equals('Possui pátio descoberto');
    expect(textos[1]).to.be.equals('Possui água potável');
    expect(textos[2]).to.be.equals('Não possui área verde');
  });

  it("Respondeu SSS, mas nada diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Sim",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 1,
      in_agua_potavel: 1,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(0);
  });

  it("Respondeu NNN, mas nada diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Não",
      agua_lavar_maos: "Não",
      area_verde: "Não"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 0,
      in_area_verde: 0
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(0);
  });

  it("Respondeu NSS, mas nada diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Não",
      agua_lavar_maos: "Sim",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 0,
      in_agua_potavel: 1,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(0);
  });

  it("Respondeu SNS, mas nada diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Não",
      area_verde: "Sim"
    }
    const escola = {
      in_patio_descoberto: 1,
      in_agua_potavel: 0,
      in_area_verde: 1
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(0);
  });

  it("Respondeu SSN, mas nada diverge do Censo", () => {
    const resposta = {
      patio_descoberto: "Sim",
      agua_lavar_maos: "Sim",
      area_verde: "Não"
    }
    const escola = {
      in_patio_descoberto: 1,
      in_agua_potavel: 1,
      in_area_verde: 0
    }
    const textos = getDivergencias(resposta, escola);
    expect(textos).to.be.an('array');
    expect(textos).to.have.lengthOf(0);
  });

});