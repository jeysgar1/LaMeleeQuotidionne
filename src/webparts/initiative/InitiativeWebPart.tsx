import 'semantic-ui-css/semantic.min.css'
import * as ReactDom from "react-dom";
import {
  IPropertyPaneConfiguration, IPropertyPaneDropdownOption, PropertyPaneDropdown
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';
import Initiative from './components/Initiative';
import * as React from 'react';
import { SPFI } from '@pnp/sp';
import { IList } from '@pnp/sp/lists';
import { spfxConnect } from '../../services';
import { InitiativeType } from './models/InitiativeType';
import { EpopeeType } from '../epopee/models/EpopeeType';
import { InitiativeProps } from './models';

export default class InitiativeWebPart extends BaseClientSideWebPart<InitiativeProps> {
  
  _sp : SPFI
  _iList: IList
  _items: any[]
  _options: IPropertyPaneDropdownOption[]
  _selected: InitiativeType = new InitiativeType();
  _epicas: EpopeeType[] 
  
  public render(): void {
    const element: React.ReactElement<InitiativeProps> = React.createElement(
      Initiative, {
        _sp: this._sp,
        _context:this.context,
        _iList: this._iList,
        _items: this._items,
        _selected: this._selected,
        _epicas : this._epicas,
        Title: this.properties.Title,
        Alcance : this.properties.Alcance,
        Necesidad: this.properties.Necesidad,
        Consideraciones: this.properties.Consideraciones,
        Restricciones: this.properties.Restricciones,
        Supuestos: this.properties.Supuestos,
        Nombre: this.properties.Nombre,
        ID : this.properties.ID
      }
    );
    console.log(this._selected)
    ReactDom.render(element, this.domElement);
  }

  async onInit(): Promise<void> {
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

  protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): Promise<void> {
    if (propertyPath === "Title") {
      const item = this._items?.filter((element) => element.Title == newValue)[0];
      this._selected = item
      const epicasList = this._sp.web.lists.getByTitle("Epicas");
      this._epicas = await epicasList.items();
      this._selected.Epicas = this._epicas?.filter((item) => item.IniciativaId == this._selected.ID);
      console.log("Iniciativa seleccionada : " + JSON.stringify(this._selected));
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
              "Una iniciativa es una solicitud realizada a la gerencia de aplicaciones para implementar, desarrollar o corregir una funcionalidad o interacción de un usuario sobre un aplicativo",
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
