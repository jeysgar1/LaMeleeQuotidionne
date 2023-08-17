import "semantic-ui-css/semantic.min.css";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ApiSpecType } from '../../models/ApiSpectType';
export default class ApiSpecificationWebPart extends BaseClientSideWebPart<ApiSpecType> {
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ApiSpecificationWebPart.d.ts.map