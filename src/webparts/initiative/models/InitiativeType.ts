import { CommonType } from "../../../models/CommonType";
import { EpopeeType } from "../../epopee/models/EpopeeType";

export class InitiativeType extends CommonType {
  Supuestos: string;
  Alcance: string;
  Consideraciones: string;
  Restricciones: string;
  Epicas? : EpopeeType[]
};