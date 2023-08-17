import { SPFI } from "@pnp/sp";
import { EnumAppStates } from "../models/EnumAppStates";
import { IListEnsureResult } from "@pnp/sp/lists";

export async function spfxCreateStateField(sp:SPFI, list : IListEnsureResult) : Promise<void> {
    if (list.created) {
       await sp.web.lists
           .getById(list.data.Id).fields.addChoice('State', { Required : true, Description : 'Estado del componente', Choices: Object.keys(EnumAppStates) }) 
    }
}