import { SPFI } from "@pnp/sp";
import { IListEnsureResult } from "@pnp/sp/lists";

export async function spfxCreateList(sp : SPFI, name : string, description : string) : Promise<IListEnsureResult>{
    return await sp.web.lists.ensure(
      name,
      description,
      101,
      true,
      { OnQuickLaunch: true }
    );
}