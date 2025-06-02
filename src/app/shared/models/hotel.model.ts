

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
  stared?: boolean;
}

export interface DetalhesModel {
  id?: string;
  name: string;
  rede: string;
  city: string;
  url: string;
  description: string;
  category: number;
  child: boolean;
  pets: boolean;
  petsTax: number;
  cep: string;
  address: string;
  number: string;
  complement: string;
  lobby: string;
  diff: string;
  beach: boolean;
  downtown: boolean;
  airpot: boolean;
  highway: boolean;
  hospital: boolean;
  coffee: boolean;
  wifi: boolean;
  swimming: boolean;
  cleaning: boolean;
  gym: boolean;
  contacts?: Contact[];
  photos?: Photo[];
}
