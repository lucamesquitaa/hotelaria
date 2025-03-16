

export interface ItensMetaModel{
  id?: string,
  userModelId: string,
  frequency: number,
  hour: number,
  title: string,
  description?: string,
  state?: number
}

export enum CategoriesMetaModel{
  Alimentacao = "Alimentação", //1
  AtividadeFisica = "Atividade física", //2
  Outros = "Outros" //3
}
export enum EstadoMetaModel{
  Concluido = "Concluído", //1
  EmAndamento = "Em andamento" //2
}
