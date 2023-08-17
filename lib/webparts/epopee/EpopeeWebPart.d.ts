import 'semantic-ui-css/semantic.min.css';
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration, IPropertyPaneDropdownOption } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import { InitiativeType } from "../initiative/models/InitiativeType";
import { IList } from "@pnp/sp/lists";
import { EpopeeType } from "./models/EpopeeType";
import { EpopeeProps } from './models/EpopeeProps';
import { HistorieType } from '../../models/HistorieType';
export default class EpopeeWebPart extends BaseClientSideWebPart<EpopeeProps> {
    _sp: SPFI;
    _iList: IList;
    _items: any[];
    _options: IPropertyPaneDropdownOption[];
    _selected: InitiativeType;
    _epicas: EpopeeType[];
    _historias: HistorieType[];
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=EpopeeWebPart.d.ts.map