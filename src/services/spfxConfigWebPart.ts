import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfxConnect } from "./spfxConnect";
import { spfxCreateList } from "./spfxCreateList";
import { spfxCreateDescriptionField } from "./spfxCreateDescriptionField";
import { spfxConfigDefaultView } from "./spfxConfigDefaultView";
import { spfxCreateStateField } from "./spfxCreateStateField";
import { spfxCreateScopeField } from "./spfxCreateScopeField";

export async function spfxConfigWebPart(context: WebPartContext, name:string, description:string) : Promise<void>{
    const sp = spfxConnect(context);
    const list = await spfxCreateList(sp, name, description);
    await spfxCreateDescriptionField(sp, list);
    await spfxCreateScopeField(sp, list);
    await spfxCreateStateField(sp, list);
    await spfxConfigDefaultView(sp, list);
}