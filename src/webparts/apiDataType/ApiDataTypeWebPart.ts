import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ApiDataType from './components/ApiDataType';
import { ApiDataTypeModel } from '../../models/ApiDataType';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from "@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor";

export default class ApiDataTypeWebPart extends BaseClientSideWebPart<ApiDataTypeModel> {

  public render(): void {
    const element: React.ReactElement<ApiDataTypeModel> = React.createElement(
      ApiDataType,
      {
        Description: this.properties.Description,
        Name: this.properties.Name,
        HtmlCode: this.properties.HtmlCode,
        Version:this.properties.Version
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
            description: "Un tipo de dato de una API es un fragmento reutilizable que describe los campos que compone un objeto o estructura de datos"
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField('Name', {
                  label: "Ponle un nombre"
                }),
                PropertyPaneTextField('Description', {
                  label: "¿Cuál es el objetivo del tipo de dato?",
                  multiline: true,
                  rows:5
                }),
                PropertyFieldCodeEditor('HtmlCode', {
                  label: 'Manos a la obra',
                  panelTitle: 'Escribe la especificación',
                  initialValue: this.properties.HtmlCode,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  key: 'htmlCodeFieldId',
                  language: PropertyFieldCodeEditorLanguages["Plain Text"],
                  options: {
                    wrap: true,
                    fontSize: 20,
                    // more options
                  }
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
