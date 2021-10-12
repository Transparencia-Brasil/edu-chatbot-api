/**
 * Calcula pontuação para perguntas sobre 'aulas'
 * 
 * @param { any } resposta Objeto com respostas como descrito no model
 * @returns number
 */
function calcularPontuacaoFaseAulas(resposta) {
  let pontuacao = 0;
  // Os professores estão usando máscara em sala de aula em todas as aulas?
  if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Sempre") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Às vezes") {
    pontuacao += -0.5;
  } else if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Nunca") {
    pontuacao += -1;
  }

  // Os estudantes estão usando máscara em sala de aula em todas as aulas?
  if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Sempre") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Às vezes") {
    pontuacao += -0.5;
  } else if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Nunca") {
    pontuacao += -1;
  }

  // Como está a distância entre estudantes dentro da sala de aula?
  // Se todos abrirem os braços, vão se encostar?
  if (typeof resposta !== "undefined" && resposta.distanciamento_sala === "Não") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.distanciamento_sala === "Sim") {
    pontuacao += -1;
  }

  // Na hora da merenda, você consegue comer a uma distância segura de pelo menos um metro
  // de seus colegas?
  if (typeof resposta !== "undefined" && resposta.distanciamento_merenda === "Sim") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.distanciamento_merenda === "Não") {
    pontuacao += -1;
  }

  // Há na sua escola um outro espaço disponível que não está usado durante a merenda e
  // poderia garantir maior distanciamento durante as refeições?
  if (typeof resposta !== "undefined" && resposta.espaco_alternativo_merenda === "Sim") {
    pontuacao += -1;
  }
  return pontuacao;
}

/**
 * Calcula pontuação para perguntas sobre 'infra'
 * 
 * @param { any } resposta Objeto com respostas como descrito no model
 * @returns number
 */
function calcularPontuacaoFaseInfra(resposta) {
  let pontuacao = 0;
  // Sua escola tem pátio descoberto?
  if (typeof resposta !== "undefined" && resposta.patio_descoberto === "Sim") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.patio_descoberto === "Não") {
    pontuacao += -1;
  }

  // Sua escola tem água para lavar as mãos?
  if (typeof resposta !== "undefined" && resposta.agua_lavar_maos === "Sim") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.agua_lavar_maos === "Não") {
    pontuacao += -2;
  }

  // Sua escola tem espaço verde com grama ou plantas?
  if (typeof resposta !== "undefined" && resposta.area_verde === "Sim") {
    pontuacao += 1;
  } else if (typeof resposta !== "undefined" && resposta.area_verde === "Não") {
    pontuacao += -1;
  }
  return pontuacao;
}

function calcularPontuacaoTotal(resposta) {
  return 0;
}

module.exports = {
  calcularPontuacaoFaseAulas,
  calcularPontuacaoFaseInfra,
  calcularPontuacaoTotal
}