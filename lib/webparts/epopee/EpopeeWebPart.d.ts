import 'semantic-ui-css/semantic.min.css';
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { EpopeeProps } from './models/EpopeeProps';
export default class EpopeeWebPart extends BaseClientSideWebPart<EpopeeProps> {
    render(): void;
    protected onDispose(): void;
    protected get disableReactivePropertyChanges(): boolean;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=EpopeeWebPart.d.ts.map