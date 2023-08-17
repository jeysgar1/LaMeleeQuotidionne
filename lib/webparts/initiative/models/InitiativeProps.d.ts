import { SPFI } from "@pnp/sp";
import { IList } from '@pnp/sp/lists';
import { InitiativeType } from "./InitiativeType";
import { EpopeeType } from "../../epopee/models/EpopeeType";
import { WebPartContext } from "@microsoft/sp-webpart-base";
export declare class InitiativeProps extends InitiativeType {
    _sp: SPFI;
    _context: WebPartContext;
    _iList: IList;
    _items: InitiativeType[];
    _selected: InitiativeType;
    _epicas: EpopeeType[];
}
//# sourceMappingURL=InitiativeProps.d.ts.map