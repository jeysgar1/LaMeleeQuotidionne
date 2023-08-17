import { CommonType } from "../../../models/CommonType";
import { HistorieType } from "../../../models/HistorieType";

export class EpopeeType extends CommonType {
    IniciativaId: number;
    Historias:HistorieType[]
}
