// import pnp and pnp logging system
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
var sp = undefined;
var globalContext;
export function spfxConnect(context) {
    if (!context)
        console.error("El contexto del elemento es indefinido");
    else {
        if (!sp)
            sp = spfi().using(SPFx(context));
        globalContext = context;
        return sp;
    }
    return undefined;
}
export { sp, globalContext };
//# sourceMappingURL=spfxConnect.js.map