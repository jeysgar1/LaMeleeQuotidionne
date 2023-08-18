import { IList } from "@pnp/sp/lists";
import { sp } from "./spfxConnect";
import { EpopeeType } from "../webparts/epopee/models/EpopeeType";

class EpopeesServices {

    async getAll(): Promise<EpopeeType[] | undefined> {
        const items = await this.getReference()?.items();
        return items;
    }

    async getById(id: number): Promise<EpopeeType | undefined> {
        const item = await this.getReference()?.items.getById(id)()
        return item;
    }

    async getByInitiative(idInitiative: number | undefined): Promise<EpopeeType[] | undefined> {
        const items = await this.getReference()?.items.filter("IniciativaId eq '" + idInitiative + "'")();
        return items;
    }

    private getReference(): IList | undefined {
        return sp?.web.lists.getByTitle("Epicas");
    }
}

export default new EpopeesServices();