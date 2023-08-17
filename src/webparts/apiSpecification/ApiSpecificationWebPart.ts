import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ApiSpecification from './components/ApiSpecification';
import { ApiSpecType } from '../../models/ApiSpectType';
import { PropertyFieldDropdownWithCallout } from '@pnp/spfx-property-controls';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { CalloutTriggers } from "@pnp/spfx-property-controls/lib/common/callout/Callout";

export default class ApiSpecificationWebPart extends BaseClientSideWebPart<ApiSpecType> {


  public render(): void {
    const element: React.ReactElement<ApiSpecType> = React.createElement(
      ApiSpecification,
      {
        BaseURL: this.properties.BaseURL,
        Description: this.properties.Description,
        Verb: this.properties.Verb,
        Name: this.properties.Name,
        HtmlCode: this.properties.HtmlCode,
        Version: this.properties.Version
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
            description: "Una especificación de una API describe las funcionalidades que pueden ser accedidas por un tercero"
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField('Name', {
                  label: "Ponle un nombre",
                  value: this.properties.Name
                }),
                PropertyPaneTextField('BaseURL', {
                  label: "Ponle un identificador de acceso",
                  value: this.properties.BaseURL
                }),
                PropertyFieldDropdownWithCallout("Verb", {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: "verbFieldId",
                  label: "Seleccione un método HTTP",
                  options: [{ key: 'GET', text: 'GET' }, { key: 'POST', text: 'POST' }, { key: 'DELETE', text: 'DELETE' },
                    { key: 'PUT', text: 'PUT' }, { key: 'PATCH', text: 'PATCH' }],
                  selectedKey: this.properties.Verb,
                  calloutContent: 'Los métodos HTTP determinan la acción que se va realizar sobre la API',
                }),
                PropertyPaneTextField('Description', {
                  label: "¿Cuál es el objetivo de la API?",
                  multiline: true,
                  rows: 5,
                  value: this.properties.Description
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
