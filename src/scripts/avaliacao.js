/**
 * Calcula pontuação para perguntas sobre 'aulas'
 * 
 * @param { any } resposta Objeto com respostas como descrito no model
 * @returns number
 */
function calcularPontuacaoFaseAulas(resposta) {
  let pontuacao = 0;
  let qtdRespostas = 0;
  // Os professores estão usando máscara em sala de aula em todas as aulas?
  if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Sempre") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Às vezes") {
    pontuacao += -0.5;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.professores_usando_mascara === "Nunca") {
    pontuacao += -1;
    qtdRespostas++;
  }

  // Os estudantes estão usando máscara em sala de aula em todas as aulas?
  if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Sempre") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Às vezes") {
    pontuacao += -0.5;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.alunos_usando_mascara === "Nunca") {
    pontuacao += -1;
    qtdRespostas++;
  }

  // Como está a distância entre estudantes dentro da sala de aula?
  // Se todos abrirem os braços, vão se encostar?
  if (typeof resposta !== "undefined" && resposta.distanciamento_sala === "Não") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.distanciamento_sala === "Sim") {
    pontuacao += -1;
    qtdRespostas++;
  }

  // Na hora da merenda, você consegue comer a uma distância segura de pelo menos um metro
  // de seus colegas?
  if (typeof resposta !== "undefined" && resposta.distanciamento_merenda === "Sim") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.distanciamento_merenda === "Não") {
    pontuacao += -1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.distanciamento_merenda === "Não está tendo merenda") {
    // pontuacao += 0;
    qtdRespostas++;
  }

  // Há na sua escola um outro espaço disponível que não está usado durante a merenda e
  // poderia garantir maior distanciamento durante as refeições?
  if (typeof resposta !== "undefined" && resposta.espaco_alternativo_merenda === "Sim") {
    pontuacao += -1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.espaco_alternativo_merenda === "Não") {
    // pontuacao += 0;
    qtdRespostas++;
  }

  // Como está a ventilação natural da sala de aula? Portas e janelas são mantidas abertas durante as aulas?
  if (typeof resposta !== "undefined" && resposta.ventilacao === "Sim") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.ventilacao === "Apenas portas ou apenas janelas") {
    pontuacao += -0.5;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.ventilacao === "Não") {
    pontuacao += -1;
    qtdRespostas++;
  }

  return {
    pontuacao,
    qtdRespostas
  };
}

/**
 * Calcula pontuação para perguntas sobre 'infra'
 * 
 * @param { any } resposta Objeto com respostas como descrito no model
 * @returns number
 */
function calcularPontuacaoFaseInfra(resposta) {
  let pontuacao = 0;
  let qtdRespostas = 0;
  // Sua escola tem pátio descoberto?
  if (typeof resposta !== "undefined" && resposta.patio_descoberto === "Sim") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.patio_descoberto === "Não") {
    pontuacao += -1;
    qtdRespostas++;
  }

  // Sua escola tem água para lavar as mãos?
  if (typeof resposta !== "undefined" && resposta.agua_lavar_maos === "Sim") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.agua_lavar_maos === "Não") {
    pontuacao += -2;
    qtdRespostas++;
  }

  // Sua escola tem espaço verde com grama ou plantas?
  if (typeof resposta !== "undefined" && resposta.area_verde === "Sim") {
    pontuacao += 1;
    qtdRespostas++;
  } else if (typeof resposta !== "undefined" && resposta.area_verde === "Não") {
    pontuacao += -1;
    qtdRespostas++;
  }

  return {
    pontuacao,
    qtdRespostas
  };
}

/**
 * Calcula pontuação para todas as perguntas
 * 
 * @param { any } resposta Objeto com respostas como descrito no model
 * @returns number
 */
function calcularPontuacaoTotal(resposta) {
  const faseAula = calcularPontuacaoFaseAulas(resposta);
  const faseInfra = calcularPontuacaoFaseInfra(resposta);
  let pontuacao = faseAula.pontuacao + faseInfra.pontuacao;
  let qtdRespostas = faseAula.qtdRespostas + faseInfra.qtdRespostas;

  if (qtdRespostas < 3) {
    return {
      pontuacao: null,
      resultado: "--",
      qtdRespostas: qtdRespostas
    }
  }

  let resultado = "";
  if (pontuacao >= -10 && pontuacao < -4) {
    resultado = "Escola DE RISCO";
  } else if (pontuacao >= -4 && pontuacao < 1) {
    resultado = "Escola AMEAÇA";
  } else if (pontuacao >= 1 && pontuacao < 5) {
    resultado = "Escola DEFENSORA";
  } else if (pontuacao >= 5) {
    resultado = "Escola PROTETORA";
  }

  return {
    pontuacao,
    resultado,
    qtdRespostas
  };
}

module.exports = {
  calcularPontuacaoFaseAulas,
  calcularPontuacaoFaseInfra,
  calcularPontuacaoTotal
}