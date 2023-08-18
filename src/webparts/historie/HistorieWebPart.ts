import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Historie from "./components/Historie";
import { HistorieType } from "./models/HistorieType";

export default class HistorieWebPart extends BaseClientSideWebPart<HistorieType> {
  public render(): void {
    const element: React.ReactElement<HistorieType> = React.createElement(
      Historie,
      {
        EpicaId: this.properties.EpicaId,
        Title: this.properties.Title,
        Necesidad: this.properties.Necesidad,
        Criterios: this.properties.Criterios,
        Nombre: this.properties.Nombre,
        ID : this.properties.ID
      }
    );

    ReactDom.render(element, this.domElement);
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
            description: "Una historia de usuario es la transcripción que realiza un proxy de una necesidad de un usuario a una solicitud de implementación técnica",
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField("Description", {
                  label: "Escribe la historia de usuario de usuario",
                  description:
                    "Recuerda seguir el patrón Como un [] deseo [] para []",
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
