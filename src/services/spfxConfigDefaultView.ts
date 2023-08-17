import { SPFI } from "@pnp/sp";
import { IListEnsureResult } from "@pnp/sp/lists";


export async function spfxConfigDefaultView(
  sp: SPFI,
  list: IListEnsureResult
): Promise<void> {
  if (list.created) {
    await sp.web.lists.getById(list.data.Id).defaultView.fields.add("Created");
    await sp.web.lists
      .getById(list.data.Id)
      .defaultView.fields.add("Created By");
    await sp.web.lists.getById(list.data.Id).defaultView.fields.add("Modified");
    await sp.web.lists
      .getById(list.data.Id)
      .defaultView.fields.add("Modified By");
    await sp.web.lists.getById(list.data.Id).defaultView.fields.add("Name");
  }
}