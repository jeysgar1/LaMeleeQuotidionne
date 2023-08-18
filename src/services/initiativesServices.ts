import { IList } from "@pnp/sp/lists";
import { sp } from "./spfxConnect";
import InitiativeType from "../webparts/initiative/models/InitiativeType";

class InitiativesServices {

    async getAll(): Promise<InitiativeType[] | undefined> {
        console.log("Consultando todas las iniciativas")
        const items = await this.getReference()?.items();
        console.log("Se obtuvieron " + items?.length)
        return items;
    }

    async getById(id: number): Promise<InitiativeType | undefined> {
        const item = await this.getReference()?.items.getById(id)()
        return item;
    }

    async getByTitle(title: string): Promise<InitiativeType | undefined> {
        const items = await this.getReference()?.items.filter("Title eq '" + title + "'")()
        return items ? items[0] : undefined;
    }

    private getReference(): IList | undefined {
        console.log("Obteniendo referencia a la lista de Iniciativas");
        return sp?.web.lists.getByTitle("Iniciativas");
    }
}

export default new InitiativesServices();
