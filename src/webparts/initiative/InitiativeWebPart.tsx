import 'semantic-ui-css/semantic.min.css'
import * as ReactDom from "react-dom";
import {
  IPropertyPaneConfiguration
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';
import Initiative from './components/Initiative';
import * as React from 'react';
import { InitiativeProps } from './models';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { spfxConnect } from '../../services';

export default class InitiativeWebPart extends BaseClientSideWebPart<InitiativeProps> {

  public render(): void {
    const element: React.ReactElement<InitiativeProps> = React.createElement(
      Initiative, {
        context: this.context
      }
    );
    const provider = React.createElement(Provider, {
      store: store,
      children: element
    })
    ReactDom.render(provider, this.domElement);
  }

  protected onInit(): Promise<void> {
    spfxConnect(this.context);
    return Promise.resolve()
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description:
              "Una iniciativa es una solicitud realizada a la gerencia de aplicaciones para implementar, desarrollar o corregir una funcionalidad o interacción de un usuario sobre un aplicativo",
          },
          groups: [
            {
              groupName: "",
              groupFields: [

              ],
            },
          ],
        },
      ],
    };
  }
}
