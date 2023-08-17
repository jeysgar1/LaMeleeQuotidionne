import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import Canaux from "./components/Canaux";
import { CanalType } from "../../models/CanalType";

export default class CanauxWebPart extends BaseClientSideWebPart<CanalType> {
  public render(): void {
    const element: React.ReactElement<CanalType> = React.createElement(Canaux, {
      Name: this.properties.Name,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description:
              "Un canal es un medio por el cuál un usuario accede a una aplicación",
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField("Name", {
                  label: "Canal",
                  description:
                    "Medio por el cuál accede el usuario a un aplicativo",
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
