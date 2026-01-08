

export interface DisponiResponseApi {
  sucesso: boolean
  mensagem: string
  excecaoMensagem: any
  data: DisponiModel[]
}

export interface DisponiModel {
  id: string
  quartosModelId: string
  quartos: any
  name: string
  status: StatusReservaEnum
  startDate: string
  endDate: string
  dayPrice: number
  minDays: number
  maxDays: number
  reembolsavel: boolean
  statusString: string
}

export interface QuartoDisponibilidade {
    id: string
    hotelName: string
    hotelId: string
    name: string
    disponiQuarto?: DisponiModel[]
}

export enum StatusReservaEnum {
   Pendente = 1,
   PreReserva = 2,
   AguardandoPagamento = 3,
   Bloqueado = 4,
   Confirmada = 5,
 }
