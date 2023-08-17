import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import App from "./components/App";
import { AppType } from "../../models/AppType";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";

export default class AppWebPart extends BaseClientSideWebPart<AppType> {
  public render(): void {
    const element: React.ReactElement<AppType> = React.createElement(App, {
      Description: this.properties.Description,
      Name: this.properties.Name,
    });

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
              "Una aplicación es una implementación a la medida o un producto licenciado y adaptado mantenido por un equipo de trabajo",
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField("Name", {
                  label: "Ponme un nombre",
                  description: "Asignale un nombre a la aplicación",
                }),
                PropertyPaneTextField("Description", {
                  label: "Dale una razón de ser",
                  description: "¿Cuál es el objetivo de la aplicación?",
                  multiline: true,
                  rows: 10,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
