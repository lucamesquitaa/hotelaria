

 export interface Contact {
  id?: string;
  detalhesModelId?: string;
  name: string;
  contact: string;
}

export interface Photo {
  id?: string;
  detalhesModelId?: string;
  alt: string;
  url: string;
  stared?: boolean | string;
}
export interface DetalhesModel {
  name: string;
  rede: string;
  city: string;
  url: string;
  description: string;
  category: number;
  child: boolean | string;
  pets: boolean | string;
  petsTax: number;
  cep: string;
  address: string;
  number: string;
  complement: string;
  lobby: string;
  diff: string;
  beach: boolean | string;
  downtown: boolean | string;
  airpot: boolean | string;
  highway: boolean | string;
  hospital: boolean | string;
  coffee: boolean | string;
  wifi: boolean | string;
  swimming: boolean | string;
  cleaning: boolean | string;
  gym: boolean | string;
  contacts?: Contact[];
  photos?: Photo[];
}

export interface DetalhesModelByManager {
  name: string;
  rede: string;
  city: string;
  url: string;
  description: string;
  category: number;
  child: boolean | string;
  pets: boolean | string;
  petsTax: number;
  cep: string;
  address: string;
  number: string;
  complement: string;
  lobby: string;
  diff: string;
  beach: boolean | string;
  downtown: boolean | string;
  airpot: boolean | string;
  highway: boolean | string;
  hospital: boolean | string;
  coffee: boolean | string;
  wifi: boolean | string;
  swimming: boolean | string;
  cleaning: boolean | string;
  gym: boolean | string;
  contacts?: Contact[];
  photos?: Photo[];
  //infos privadas
  cnpj: string;
  razao: string;
  nomeRep: string;
  telRep: string;
  cpfRep: string;
  emailRep: string;
}
