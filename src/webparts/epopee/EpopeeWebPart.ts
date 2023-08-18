import 'semantic-ui-css/semantic.min.css';
import * as React from "react";
import * as ReactDom from "react-dom";

import {
  IPropertyPaneConfiguration
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Epopee from "./components/Epopee";

import { EpopeeProps } from './models/EpopeeProps';
import { store } from '../../store';
import { Provider } from 'react-redux';

export default class EpopeeWebPart extends BaseClientSideWebPart<EpopeeProps> {

  public render(): void {
    const element: React.ReactElement<EpopeeProps> = React.createElement(
      Epopee,
      {
        context: this.context
      }
    );
    const provider = React.createElement(Provider, {
      store: store,
      children: element
    })
    ReactDom.render(provider, this.domElement);
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
              "Una épica es un conjunto de pequeñas unidades de trabajo (llamadas historias de usuario) que comparten un mismo objetivo",
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
