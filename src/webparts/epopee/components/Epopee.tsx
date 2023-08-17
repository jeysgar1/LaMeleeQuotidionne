import 'semantic-ui-css/semantic.min.css'
import * as React from "react";

import { Container, Item } from 'semantic-ui-react';
import { EpopeeProps } from '../models/EpopeeProps';
import { EpopeeState } from '../models/EpopeeState';
import Historie from '../../historie/components/Historie';
import { HistorieType } from '../../../models/HistorieType';
import { EpopeeType } from '../models/EpopeeType';

export default class Epopee extends React.Component<EpopeeProps, EpopeeState> {

  constructor(props: EpopeeProps) {
    super(props);
    this.state = { items: props._items, historias : props.Historias }
    console.log("Epopee > render()", this.props);
  }

  componentDidMount(): void {
    this.state = { items: this.state.items, historias : this.state.historias }
  }

  projectHistorias = (element: EpopeeType) => {
    console.log("Historias "+element.Historias);
    if (element.Historias?.length !== 0) {
      return element.Historias?.map((historia : HistorieType) => {
        <Historie EpicaId={historia.EpicaId} Criterios={historia.Criterios} ID={0} Necesidad={historia.Necesidad} Title={historia.Title} Nombre={element.Nombre} ></Historie>
      })
    }
  }


  projectCards = () => {
    if (this.props._items.length !== 0) {
      return this.props._items.map(element =>
        <Item>
          <Item.Image size='small' src={require('../assets/icon.svg')} />
          <Item.Content>
            <Item.Header>{element.Title}</Item.Header>
            <Item.Description>{element.Necesidad}</Item.Description>
            <Item.Extra>
              {this.projectHistorias(element)}
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    }
  }


  render() {

    return (
      <Container>
        <Item.Group divided>
          {this.projectCards()}
        </Item.Group>
      </Container>
    );
  }

}
