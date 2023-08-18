import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Raffinement from './components/Raffinement';
import { RaffinementProps } from './models';

export default class RaffinementWebPart extends BaseClientSideWebPart<RaffinementProps> {


  public render(): void {
    const element: React.ReactElement<RaffinementProps> = React.createElement(
      Raffinement,
      {
      }
    );
    ReactDom.render(element, this.domElement);
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }



  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Un refinamiento es el trabajo que realiza un arquitecto para dar solución a una necesidad reuniendo todos los componentes del ciclo de vída SCRUM y API"
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
