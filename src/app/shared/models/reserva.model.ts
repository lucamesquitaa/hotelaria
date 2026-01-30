

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
  isAvailable: boolean
  status: StatusReservaEnum
  startDate: string
  endDate: string
  dayPrice: number
  minDays: number
  maxDays: number
  reembolsavel: boolean
  statusString: string
  edgeStart?: boolean;
  edgeEnd?: boolean;
}

export interface QuartoDisponibilidade {
    id: string
    name: string
    number: number
  disponiQuarto?: (DisponiModel[] & { target?: number })
  reservas?: GetReservas[]
}

export enum StatusReservaEnum {
   Disponivel = 1,
   PreReserva = 2,
   AguardandoPagamento = 3,
   Bloqueado = 4,
   Confirmada = 5,
 }

 export interface AddDisponibilidadeAdd {
  status: number
  startDate: string
  endDate: string
  dayPrice: number
  minDays: number
  maxDays: number
  reembolsavel: boolean
}

export interface AddReservaAdd {
  reservaStatus: number
  checkin: string
  checkout: string
  earlyCheckin: boolean
  lateCheckout: boolean
  adults: number
  kids: number
  cupom: string
  priceTotal: number
}
export interface GetReservas {
    id: string
  quartosModelId: string
  quartos: any
  reservaStatus: number
  checkin: string
  checkout: string
  earlyCheckin: boolean
  lateCheckout: boolean
  adults: number
  kids: number
  cupom: string
  priceTotal: number
  createdAt: string
  hospede?: any[]
}

export interface UopdateDisponibilidadeDay {
  Day: string
  dayPrice: number
  minDays: number
  maxDays: number
}