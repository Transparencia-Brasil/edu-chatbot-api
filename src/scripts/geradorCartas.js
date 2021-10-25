function getTextosProblemasSeguranca(resposta) {
  const professores_usando_mascara = new Map();
  professores_usando_mascara.set('Às vezes', 'Professores e professoras somente às vezes estão usando máscara em sala de aula');
  professores_usando_mascara.set('Nunca', 'Professores e professoras nunca estão usando máscara em sala de aula');

  const alunos_usando_mascara = new Map();
  alunos_usando_mascara.set('Às vezes', 'Alunos e alunas somente às vezes estão usando máscara em sala de aula');
  alunos_usando_mascara.set('Nunca', 'Alunos e alunas nunca estão usando máscara em sala de aula');

  const distanciamento_sala = new Map();
  distanciamento_sala.set('Sim', 'Não está sendo respeitado o distanciamento mínimo recomendado pelo MEC de 1 metro dentro da sala de aula');
  
  const distanciamento_merenda = new Map();
  distanciamento_merenda.set('Não', 'Não está sendo respeitado o distanciamento mínimo recomendado pelo MEC de 1 metro dentro do refeitório ou praça de alimentação');
 
  const espaco_alternativo_merenda = new Map();
  espaco_alternativo_merenda.set('Sim', 'Há outro espaço que poderia ser ocupado como refeitório e garantir maior distanciamento nas refeições, mas não está sendo usado');
  
  const ventilacao = new Map();
  ventilacao.set('Apenas portas ou apenas janelas', 'Portas ou janelas não estão sendo mantidas abertas durante as aulas');
  ventilacao.set('Não', 'Portas e janelas não estão sendo mantidas abertas durante as aulas');
  
  const textos = [];

  const pergunta8 = professores_usando_mascara.get(resposta.professores_usando_mascara);
  if (typeof pergunta8 !== 'undefined') {
    textos.push(pergunta8);
  }
  const pergunta9 = alunos_usando_mascara.get(resposta.alunos_usando_mascara);
  if (typeof pergunta9 !== 'undefined') {
    textos.push(pergunta9);
  }
  const pergunta10 = distanciamento_sala.get(resposta.distanciamento_sala);
  if (typeof pergunta10 !== 'undefined') {
    textos.push(pergunta10);
  }
  const pergunta11 = distanciamento_merenda.get(resposta.distanciamento_merenda);
  if (typeof pergunta11 !== 'undefined') {
    textos.push(pergunta11);
  }
  const pergunta12 = espaco_alternativo_merenda.get(resposta.espaco_alternativo_merenda);
  if (typeof pergunta12 !== 'undefined') {
    textos.push(pergunta12);
  }
  const pergunta16 = ventilacao.get(resposta.ventilacao);
  if (typeof pergunta16 !== 'undefined') {
    textos.push(pergunta16);
  }

  return textos;
}

function getTextosProblemasInfraestrutura(resposta) {
  const patio_descoberto = new Map();
  patio_descoberto.set('Não', 'A escola não possui pátio descoberto');

  const agua_lavar_maos = new Map();
  agua_lavar_maos.set('Não', 'A escola não possui água potável');

  const area_verde = new Map();
  area_verde.set('Não', 'A escola não possui área verde');
  
  const textos = [];

  const pergunta13 = patio_descoberto.get(resposta.patio_descoberto);
  if (typeof pergunta13 !== 'undefined') {
    textos.push(pergunta13);
  }
  const pergunta14 = agua_lavar_maos.get(resposta.agua_lavar_maos);
  if (typeof pergunta14 !== 'undefined') {
    textos.push(pergunta14);
  }
  const pergunta15 = area_verde.get(resposta.area_verde);
  if (typeof pergunta15 !== 'undefined') {
    textos.push(pergunta15);
  }

  return textos;
}

function getTextosRecomendacoes(resposta) {
  const professores_usando_mascara = new Map();
  professores_usando_mascara.set('Às vezes', 'Seja exigido que professores e professoras sempre estejam de máscara em sala de aula');
  professores_usando_mascara.set('Nunca', 'Seja exigido que professores e professoras sempre estejam de máscara em sala de aula');

  const alunos_usando_mascara = new Map();
  alunos_usando_mascara.set('Às vezes', 'Seja exigido que alunos e alunas sempre estejam de máscara em sala de aula');
  alunos_usando_mascara.set('Nunca', 'Seja exigido que alunos e alunas sempre estejam de máscara em sala de aula');

  const distanciamento_sala = new Map();
  distanciamento_sala.set('Sim', 'Que haja realocamento das turmas de estudantes para que seja respeitado o distanciamento mínimo recomendado pelo MEC de 1 metro dentro da sala de aula');
  
  const distanciamento_merenda = new Map();
  distanciamento_merenda.set('Não', 'Disponibilizar espaço extra para refeições, se houver, ou escalonar o acesso de estudantes ao refeitório e às praças de alimentação para que seja respeitado o distanciamento mínimo recomendado pelo MEC de 1 metro dentro do refeitório ou praça de alimentação');
 
  const ventilacao = new Map();
  ventilacao.set('Apenas portas ou apenas janelas', 'Manter portas e janelas abertas para garantir ventilação natural na sala de aula');
  ventilacao.set('Não', 'Manter portas e janelas abertas para garantir ventilação natural na sala de aula');
  
  const patio_descoberto = new Map();
  patio_descoberto.set('Não', 'Na ausência de pátios abertos e/ou áreas verdes, garantir que haja ventilação nos espaços fechados e que sejam redobrados cuidados de distanciamento mínimo e uso de máscara');

  const agua_lavar_maos = new Map();
  agua_lavar_maos.set('Não', 'Que seja imediatamente providenciado acesso à água potável como condição mínima de higiene');

  const area_verde = new Map();
  area_verde.set('Não', 'Na ausência de pátios abertos e/ou áreas verdes, garantir que haja ventilação nos espaços fechados e que sejam redobrados cuidados de distanciamento mínimo e uso de máscara');
  
  const textos = [];

  const pergunta8 = professores_usando_mascara.get(resposta.professores_usando_mascara);
  if (typeof pergunta8 !== 'undefined') {
    textos.push(pergunta8);
  }
  const pergunta9 = alunos_usando_mascara.get(resposta.alunos_usando_mascara);
  if (typeof pergunta9 !== 'undefined') {
    textos.push(pergunta9);
  }
  const pergunta10 = distanciamento_sala.get(resposta.distanciamento_sala);
  if (typeof pergunta10 !== 'undefined') {
    textos.push(pergunta10);
  }
  const pergunta11 = distanciamento_merenda.get(resposta.distanciamento_merenda);
  if (typeof pergunta11 !== 'undefined') {
    textos.push(pergunta11);
  }
  const pergunta16 = ventilacao.get(resposta.ventilacao);
  if (typeof pergunta16 !== 'undefined') {
    textos.push(pergunta16);
  }
  const pergunta14 = agua_lavar_maos.get(resposta.agua_lavar_maos);
  if (typeof pergunta14 !== 'undefined') {
    textos.push(pergunta14);
  }
  if (resposta.patio_descoberto !== resposta.area_verde) {
    const pergunta13 = patio_descoberto.get(resposta.patio_descoberto);
    const pergunta15 = area_verde.get(resposta.area_verde);
    if (typeof pergunta13 !== 'undefined') {
      textos.push(pergunta13);
    }
    if (typeof pergunta15 !== 'undefined') {
      textos.push(pergunta15);
    }
  } else {
    const pergunta13 = patio_descoberto.get(resposta.patio_descoberto);
    if (typeof pergunta13 !== 'undefined') {
      textos.push(pergunta13);
    }
  }

  return textos;
}

function getDivergencias(resposta, escola) {
  const patio_descoberto = new Map();
  patio_descoberto.set('Sim', 'Possui pátio descoberto');
  patio_descoberto.set('Não', 'Não possui pátio descoberto');
  const agua_lavar_maos = new Map();
  agua_lavar_maos.set('Sim', 'Possui água potável');
  agua_lavar_maos.set('Não', 'Não possui água potável');
  const area_verde = new Map();
  area_verde.set('Sim', 'Possui área verde');
  area_verde.set('Não', 'Não possui área verde');

  const textos = [];
  const respostaPatioDescoberto = (resposta.patio_descoberto === "Sim");
  const escolaPatioDescoberto = (escola.in_patio_descoberto === 1);
  if (respostaPatioDescoberto !== escolaPatioDescoberto) {
    const patio = patio_descoberto.get(resposta.patio_descoberto);
    if (typeof patio !== 'undefined') {
      textos.push(patio);
    }
  }

  const respostaAgua = (resposta.agua_lavar_maos === "Sim"); //false
  const escolaAgua = (escola.in_agua_potavel === 1);
  if (respostaAgua !== escolaAgua) {
    const agua = agua_lavar_maos.get(resposta.agua_lavar_maos);
    if (typeof agua !== 'undefined') {
      textos.push(agua);
    }
  }

  const respostaAreaVerde = (resposta.area_verde === "Sim");
  const escolaAreaVerde = (escola.in_area_verde === 1);
  if (respostaAreaVerde !== escolaAreaVerde) {
    const areaVerde = area_verde.get(resposta.area_verde);
    if (typeof areaVerde !== 'undefined') {
      textos.push(areaVerde);
    }
  }

  return textos;
}

module.exports = {
  getTextosProblemasSeguranca,
  getTextosProblemasInfraestrutura,
  getTextosRecomendacoes,
  getDivergencias
}