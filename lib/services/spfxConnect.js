// import pnp and pnp logging system
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
export function spfxConnect(context) {
    return spfi().using(SPFx(context));
}
//# sourceMappingURL=spfxConnect.js.map