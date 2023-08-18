import "bootstrap/dist/css/bootstrap.min.css";
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { HistorieType } from "./models/HistorieType";
export default class HistorieWebPart extends BaseClientSideWebPart<HistorieType> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=HistorieWebPart.d.ts.map