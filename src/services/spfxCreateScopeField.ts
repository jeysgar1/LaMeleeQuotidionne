import { SPFI } from "@pnp/sp";
import { IListEnsureResult } from "@pnp/sp/lists";

export async function spfxCreateScopeField(sp:SPFI, list : IListEnsureResult) : Promise<void> {
    if (list.created) {
       await sp.web.lists
         .getById(list.data.Id)
         .fields.addMultilineText("Scope", { Required:true, Description:'Descripción del componente a nivel técnico', NumberOfLines : 10}); 
    }
}