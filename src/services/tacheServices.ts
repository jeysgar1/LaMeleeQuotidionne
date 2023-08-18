import { IList } from "@pnp/sp/lists";
import { sp } from "./spfxConnect";
import { TacheType } from "../webparts/tache/models/TacheType";

class TacheServices {

    async getAll(): Promise<TacheType[] | undefined> {
        const items = await this.getReference()?.items();
        return items;
    }

    async getById(id: number): Promise<TacheType | undefined> {
        const item = await this.getReference()?.items.getById(id)()
        return item;
    }

    async getByHistorie(idHistorie: number | undefined): Promise<TacheType[] | undefined> {
        const items = await this.getReference()?.items.filter("HistoriadeusuarioId eq '" + idHistorie + "'")();
        return items;
    }

    private getReference(): IList | undefined {
        return sp?.web.lists.getByTitle("Tareas");
    }
}

export default new TacheServices();