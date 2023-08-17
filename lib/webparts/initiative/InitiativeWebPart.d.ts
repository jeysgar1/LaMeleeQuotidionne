import 'semantic-ui-css/semantic.min.css';
import { IPropertyPaneConfiguration, IPropertyPaneDropdownOption } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPFI } from '@pnp/sp';
import { IList } from '@pnp/sp/lists';
import { InitiativeType } from './models/InitiativeType';
import { EpopeeType } from '../epopee/models/EpopeeType';
import { InitiativeProps } from './models';
export default class InitiativeWebPart extends BaseClientSideWebPart<InitiativeProps> {
    _sp: SPFI;
    _iList: IList;
    _items: any[];
    _options: IPropertyPaneDropdownOption[];
    _selected: InitiativeType;
    _epicas: EpopeeType[];
    render(): void;
    onInit(): Promise<void>;
    protected onDispose(): void;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=InitiativeWebPart.d.ts.map