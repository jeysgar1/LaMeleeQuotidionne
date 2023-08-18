import { IList } from "@pnp/sp/lists";
import { sp } from "./spfxConnect";
import { ApiSpecType } from "../webparts/apiSpecification/models/ApiSpectType";

class ApiSpecificationsService {

    async getAll(): Promise<ApiSpecType[] | undefined> {
        const items = await this.getReference()?.items();
        return items;
    }

    async getById(id: number): Promise<ApiSpecType | undefined> {
        const item = await this.getReference()?.items.getById(id)()
        return item;
    }

    async getByTache(idTarea: number): Promise<ApiSpecType[] | undefined> {
        const items = await this.getReference()?.items.filter("TareaId eq '" + idTarea + "'")();
        return items;
    }

    private getReference(): IList | undefined {
        return sp?.web.lists.getByTitle("Especificaciones de APIs");
    }
}

export default new ApiSpecificationsService();