import { CategoryQuartosModel } from "./categoryQuartos.model";

export interface QuartosModel {
    id: string;
    detalhesModelId: string;
    name: string;
    category: CategoryQuartosModel[];
    tags: string[];
    description: string;
    maxOcupation: number;
    refund: boolean;
    areaSize: string;
    beds: bedsModel[];
    diff: string;
    freeze: boolean;
    vault: boolean;
    telephone: boolean;
    coffee: boolean;
    wifi: boolean;
    fridge: boolean;
    cleaning: boolean;
    varanda: boolean;
    bathroom: boolean;
    bathProducts: string;
    tv: boolean;
    typeTv: string;
    photos: string[];
}

export interface bedsModel {
    type: string;
    quantity: number;
}