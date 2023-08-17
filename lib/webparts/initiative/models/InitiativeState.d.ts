import { EpopeeType } from "../../epopee/models/EpopeeType";
import { InitiativeType } from "./InitiativeType";
export declare type InitiativeState = {
    items?: InitiativeType[];
    newInitiative: InitiativeType | undefined;
    selectedInitiative: InitiativeType | undefined;
    wantSearch: boolean;
    initiative: string;
    epicas: EpopeeType[] | undefined;
};
//# sourceMappingURL=InitiativeState.d.ts.map