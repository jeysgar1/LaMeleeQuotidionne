import "semantic-ui-css/semantic.min.css";
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { CanalType } from "../../models/CanalType";
export default class CanauxWebPart extends BaseClientSideWebPart<CanalType> {
    render(): void;
    protected onDispose(): void;
    protected onInit(): Promise<void>;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CanauxWebPart.d.ts.map