import { CategoryQuartosModel } from "./categoryQuartos.model";

export interface QuartosModel {
    id: string;
    detalhesModelId: string;
    name: string;
    category: CategoryQuartosModel[];
    tags: string[];
    description: string;
    maxOcupation: number;
    refund: boolean | string;
    areaSize: string;
    beds: RoomBedDTO[];
    diff: string;
    freeze: boolean | string;
    vault: boolean | string;
    telephone: boolean | string;
    coffee: boolean | string;
    wifi: boolean | string;
    fridge: boolean | string;
    cleaning: boolean | string;
    varanda: boolean | string;
    bathroom: boolean | string;
    bathProducts: string;
    tv: boolean | string;
    typeTv: string;
    photos: string[];
}

export interface RoomBedDTO {
  id?: string; 
  quantity: number;
  bedType : number; 
}
