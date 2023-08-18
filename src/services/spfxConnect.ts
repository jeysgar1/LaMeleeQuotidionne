import { WebPartContext } from "@microsoft/sp-webpart-base";

// import pnp and pnp logging system
import { SPFI, spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";

let sp: SPFI | undefined = undefined;
let globalContext: WebPartContext;

export function spfxConnect(context: WebPartContext | undefined) {
    if (!context) console.error("El contexto del elemento es indefinido");
    else {
        if (!sp) sp = spfi().using(SPFx(context));
        globalContext = context;
        return sp;
    }
    return undefined;
}

export { sp, globalContext }

