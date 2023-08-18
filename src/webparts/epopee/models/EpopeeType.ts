import { CommonType } from "../../../models/CommonType";
import { HistorieType } from "../../historie/models/HistorieType";
import { TacheType } from "../../tache/models/TacheType";

export class EpopeeType extends CommonType {
    IniciativaId: number;
    Historias?: HistorieType[]
    Tareas?: TacheType[]
}
