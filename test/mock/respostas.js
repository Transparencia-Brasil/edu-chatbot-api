const respostaVazia = {
  "id": 1,
  "user_id": "10000001",
  "aluno_rede_publica": null,
  "relacao_escola": null,
  "segmento_curso": null,
  "nivel_escola": null,
  "nome_escola": null,
  "formato_aulas": null,
  "professores_usando_mascara": null,
  "alunos_usando_mascara": null,
  "distanciamento_sala": null,
  "distanciamento_merenda": null,
  "espaco_alternativo_merenda": null,
  "patio_descoberto": null,
  "agua_lavar_maos": null,
  "agua_beber": null,
  "area_verde": null,
  "confirma_veracidade": null,
  "complemento": null,
  "createdAt": "2021-10-08T14:48:47.247Z",
  "updatedAt": "2021-10-08T14:49:02.548Z"
}

const respostaAulaSemprePositivo = {
  "id": 1,
  "user_id": "10000001",
  "professores_usando_mascara": "Sempre",
  "alunos_usando_mascara": "Sempre",
  "distanciamento_sala": "Não",
  "distanciamento_merenda": "Sim",
  "espaco_alternativo_merenda": "Não"
}

const respostaAulaSempreNegativo = {
  "id": 1,
  "user_id": "10000001",
  "professores_usando_mascara": "Nunca",
  "alunos_usando_mascara": "Nunca",
  "distanciamento_sala": "Sim",
  "distanciamento_merenda": "Não",
  "espaco_alternativo_merenda": "Sim"
}

const respostaAulaMeioTermo = {
  "id": 1,
  "user_id": "10000001",
  "professores_usando_mascara": "Às vezes",
  "alunos_usando_mascara": "Às vezes",
  "distanciamento_sala": "Não sei responder",
  "distanciamento_merenda": "Não está tendo merenda",
  "espaco_alternativo_merenda": "Não sei responder"
}

const respostaAulaZero = {
  "id": 1,
  "user_id": "10000001",
  "professores_usando_mascara": "Não sei responder",
  "alunos_usando_mascara": "Não sei responder",
  "distanciamento_sala": "Não sei responder",
  "distanciamento_merenda": "Não sei responder",
  "espaco_alternativo_merenda": "Não sei responder"
}

module.exports = {
  respostaVazia,
  respostaAulaSemprePositivo,
  respostaAulaSempreNegativo,
  respostaAulaMeioTermo,
  respostaAulaZero
}