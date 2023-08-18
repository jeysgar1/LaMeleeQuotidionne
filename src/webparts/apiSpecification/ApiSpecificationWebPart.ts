import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ApiSpecification from './components/ApiSpecification';
import { ApiSpecType } from './models/ApiSpectType';

export default class ApiSpecificationWebPart extends BaseClientSideWebPart<ApiSpecType> {

  _options: IPropertyPaneDropdownOption[]
  _total_Tareas: number = 0
  _total_Historias: number = 0

  public render(): void {
    const element: React.ReactElement<ApiSpecType> = React.createElement(
      ApiSpecification,
      {
        BaseURL: this.properties.BaseURL,
        Necesidad: this.properties.Necesidad,
        MetodoHTTP: this.properties.MetodoHTTP,
        Nombre: this.properties.Nombre,
        HtmlCode: this.properties.HtmlCode,
        Numeroversion: this.properties.Numeroversion,
        Title: this.properties.Title
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

              ]
            }
          ]
        }
      ]
    };
  }
}
