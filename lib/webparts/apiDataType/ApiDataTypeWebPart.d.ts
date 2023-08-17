import "semantic-ui-css/semantic.min.css";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ApiDataTypeModel } from '../../models/ApiDataType';
export default class ApiDataTypeWebPart extends BaseClientSideWebPart<ApiDataTypeModel> {
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ApiDataTypeWebPart.d.ts.map