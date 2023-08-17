import 'semantic-ui-css/semantic.min.css'
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration, IPropertyPaneDropdownOption, PropertyPaneDropdown,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Epopee from "./components/Epopee";

import { SPFI } from "@pnp/sp";
import { InitiativeType } from "../initiative/models/InitiativeType";
import { spfxConnect } from "../../services";
import { IList } from "@pnp/sp/lists";
import { EpopeeType } from "./models/EpopeeType";
import { EpopeeProps } from './models/EpopeeProps';
import { HistorieType } from '../../models/HistorieType';

export default class EpopeeWebPart extends BaseClientSideWebPart<EpopeeProps> {
  
  _sp: SPFI
  _iList: IList
  _items: any[]
  _options: IPropertyPaneDropdownOption[]
  _selected: InitiativeType = new InitiativeType();
  _epicas: EpopeeType[]
  _historias: HistorieType[]
  
  public render(): void {
    const element: React.ReactElement<EpopeeProps> = React.createElement(
      Epopee,
      {
        _items: this._epicas,
        Title: this.properties.Title,
        Necesidad: this.properties.Necesidad,
        Nombre: this.properties.Nombre,
        ID: this.properties.ID,
        IniciativaId: this.properties.IniciativaId,
        Historias : this._historias
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    this._sp = spfxConnect(this.context);
    this._iList = this._sp.web.lists.getByTitle("Iniciativas");
    const epicasList = this._sp.web.lists.getByTitle("Epicas");
    this._items = await this._iList.items();
    this._epicas = await epicasList.items();
    if (this._items && this._items.length > 0) {
      this._selected = this._items[0];
      this._selected.Epicas = this._epicas?.filter((item) => item.IniciativaId == this._selected.ID);
      console.log("Iniciativa seleccionada : " + JSON.stringify(this._selected));
    }
    this._options = [];
    this._items?.forEach((element) => {
      this._options.push({
        key: element.Title,
        text: element.Title
      })
    })
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void> {
    if (propertyPath === "Title") {
      const epicasList = this._sp.web.lists.getByTitle("Epicas");
      const historiasList = this._sp.web.lists.getByTitle("Historias de usuario");
      this._epicas = await epicasList.items();
      this._historias = await historiasList.items();
      this._epicas = this._epicas?.filter((item) => item.IniciativaId == this._selected.ID);
      console.log("Epicas a mostrar : " + JSON.stringify(this._epicas));
      this._epicas.forEach((element) => {
        element.Historias = this._historias?.filter((item) => item.EpicaId == element.ID);
      })
      this.context.propertyPane.refresh();
      this.render();
    }
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
                PropertyPaneDropdown('Title', {
                  label: 'Selecciona una iniciativa',
                  options: this._options
                })
              ],
            },
          ],
        },
      ],
    };
  }
}
