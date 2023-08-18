import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TacheWebPartStrings';
import Tache from './components/Tache';
import { TacheType } from './models/TacheType';


export default class TacheWebPart extends BaseClientSideWebPart<TacheType> {


  public render(): void {
    const element: React.ReactElement<TacheType> = React.createElement(
      Tache,
      {
        Necesidad: this.properties.Necesidad,
        Title: this.properties.Title,
        ID: this.properties.ID,
        Nombre: this.properties.Nombre,
        AppId: this.properties.AppId,
        HistoriaId: this.properties.HistoriaId
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Una tarea es la acción que debe realizar un equipo de trabajo para cumplir un objetivo"
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('Name', {
                  label: "Ponle un nombre"
                }),
                PropertyPaneTextField('Description', {
                  label: "Explica lo que deben hacer",
                  multiline: true,
                  rows:5
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
