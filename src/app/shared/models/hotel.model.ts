

 interface Contact {
  id: string;
  detalhesModelId: string;
  name: string;
  contact: string;
}

interface Photo {
  id: string;
  detalhesModelId: string;
  alt: string;
  url: string;
}

export interface DetalhesModel {
  id: string;
  name: string;
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
  contacts: Contact[];
  photos: Photo[];
}
