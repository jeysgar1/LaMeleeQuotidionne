import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
declare let sp: SPFI | undefined;
declare let globalContext: WebPartContext;
export declare function spfxConnect(context: WebPartContext | undefined): SPFI | undefined;
export { sp, globalContext };
//# sourceMappingURL=spfxConnect.d.ts.map