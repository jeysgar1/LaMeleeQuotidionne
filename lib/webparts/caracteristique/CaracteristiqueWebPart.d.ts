import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { CaracteristiqueType } from "../../models/CaracteristiqueType";
export default class CaracteristiqueWebPart extends BaseClientSideWebPart<CaracteristiqueType> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    private getAppCalloutContent;
    private getChannelCalloutContent;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CaracteristiqueWebPart.d.ts.map