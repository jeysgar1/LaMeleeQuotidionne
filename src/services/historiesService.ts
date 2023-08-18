import { IList } from "@pnp/sp/lists";
import { sp } from "./spfxConnect";
import { HistorieType } from "../webparts/historie/models/HistorieType";

class HistoriesServices {

    async getAll(): Promise<HistorieType[] | undefined> {
        const items = await this.getReference()?.items();
        return items;
    }

    async getById(id: number): Promise<HistorieType | undefined> {
        const item = await this.getReference()?.items.getById(id)()
        return item;
    }

    async getByEpopee(idEpica: number): Promise<HistorieType[] | undefined> {
        const items = await this.getReference()?.items.filter("EpicaId eq '" + idEpica + "'")();
        return items;
    }

    private getReference(): IList | undefined {
        return sp?.web.lists.getByTitle("Historias de usuario");
    }
}

export default new HistoriesServices();