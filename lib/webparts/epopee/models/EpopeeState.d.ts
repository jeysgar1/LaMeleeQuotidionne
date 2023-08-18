import { WebPartContext } from "@microsoft/sp-webpart-base";
import InitiativeType from "../../initiative/models/InitiativeType";
import { EpopeeType } from "./EpopeeType";
export declare type EpopeeState = {
    context: WebPartContext | undefined;
    items: EpopeeType[] | undefined;
    item: EpopeeType | undefined;
    initiatives: InitiativeType[] | undefined;
    initiative: InitiativeType | undefined;
};
//# sourceMappingURL=EpopeeState.d.ts.map