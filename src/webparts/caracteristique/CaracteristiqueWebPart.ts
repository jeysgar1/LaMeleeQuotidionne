import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "CaracteristiqueWebPartStrings";
import Caracteristique from "./components/Caracteristique";
import { CaracteristiqueType } from "../../models/CaracteristiqueType";
import {
  PropertyFieldButtonWithCallout,
  PropertyFieldDropdownWithCallout,
} from "@pnp/spfx-property-controls";
import { CalloutTriggers } from "@pnp/spfx-property-controls/lib/common/callout/Callout";
import { Apps } from "../app/Apps";
import { Channels } from "../canaux/Channels";

export default class CaracteristiqueWebPart extends BaseClientSideWebPart<CaracteristiqueType> {
  public render(): void {
    const element: React.ReactElement<CaracteristiqueType> =
      React.createElement(Caracteristique, {
        description: this.properties.description,
        name: this.properties.name,
        appKey: this.properties.appKey,
        channelKey: this.properties.channelKey,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  private getAppCalloutContent(): JSX.Element {
    const selectedKey: string = this.properties.appKey;

    if (selectedKey) {
      return React.createElement(
        "div",
        {},
        `Esta funcionalidad es sobre la aplicación : ${selectedKey}`
      );
    } else {
      return React.createElement(
        "div",
        {},
        `Toda funcionalidad tiene asociada una aplicación`
      );
    }
  }

  private getChannelCalloutContent(): JSX.Element {
    const selectedKey: string = this.properties.channelKey;

    if (selectedKey) {
      return React.createElement(
        "div",
        {},
        `Esta funcionalidad se ejecuta sobre el canal : ${selectedKey}`
      );
    } else {
      return React.createElement(
        "div",
        {},
        `Toda funcionalidad tiene asociado un canal`
      );
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    const appsName: IPropertyPaneDropdownOption[] = [];
    Apps.forEach((x) => {
      appsName.push({ key: x.name, text: x.name });
    });
    const channelsName: IPropertyPaneDropdownOption[] = [];
    Channels.forEach((x) => {
      channelsName.push({ key: x.name, text: x.name });
    });
    return {
      pages: [
        {
          header: {
            description:
              "Una funcionalidad es una interacción o acción que realiza un usuario sobre una aplicación",
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("name", {
                  label: "Ponme un nombre",
                  description: "¿Qué nombre será asignado?",
                  value: this.properties.name,
                }),
                PropertyFieldDropdownWithCallout("appKey", {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: "appFieldId",
                  label: "Seleccione una aplicación",
                  options: appsName,
                  selectedKey: this.properties.appKey,
                  calloutContent: this.getAppCalloutContent,
                }),
                PropertyFieldDropdownWithCallout("channelKey", {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: "channelFieldId",
                  label: "Seleccione un canal",
                  options: channelsName,
                  selectedKey: this.properties.channelKey,
                  calloutContent: this.getChannelCalloutContent,
                }),
                PropertyPaneTextField("description", {
                  label: "Interacción o acción",
                  description: "¿Qué podrá hacer el usuario?",
                  value: this.properties.description,
                  multiline: true,
                  rows: 5,
                }),

                PropertyFieldButtonWithCallout("save", {
                  calloutTrigger: CalloutTriggers.Click,
                  key: "buttonSave",
                  calloutContent: React.createElement(
                    "p",
                    {},
                    "Crea o edita la funcionalidad"
                  ),
                  calloutWidth: 150,
                  text: "Guardar",
                  onClick: async () => {
                    
                  },
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
