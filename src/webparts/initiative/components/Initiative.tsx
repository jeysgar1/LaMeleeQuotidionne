import 'semantic-ui-css/semantic.min.css'
import * as React from "react";
import { Card, Message, Grid, Image } from 'semantic-ui-react'
import { InitiativeProps } from "../models/InitiativeProps";
import { InitiativeState } from "../models/InitiativeState";


export default class Initiative extends React.Component<InitiativeProps, InitiativeState> {

  constructor(props: InitiativeProps) {
    super(props);
    this.state = { epicas: props._epicas, initiative: '', items: props._items, newInitiative: undefined, wantSearch: false, selectedInitiative: props._selected }
    console.log("Initiative > render()", this.props);
  }

  render(): React.ReactElement<InitiativeProps> {
    return (
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Card
              fluid
            >
              <Image src={require('../assets/icon.svg')} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {this.props._selected?.Title}
                </Card.Header>
                <Card.Meta>{this.props._selected?.Nombre}</Card.Meta>
              </Card.Content>
            </Card>
            {
              this.props._selected?.Necesidad &&
              <Message color="purple">
                <Message.Header>¿Necesidad del usuario?</Message.Header>
                  <p>{this.props._selected?.Necesidad}</p>
              </Message>
            }
            {
              this.props._selected?.Alcance &&
              <Message color="olive">
                <Message.Header>¿Alcance técnico?</Message.Header>
                  <p>{this.props._selected?.Alcance}</p>
              </Message>
            }
          </Grid.Column>
          <Grid.Column>
            {
              this.props._selected?.Restricciones &&
              <Message color="red">
                <Message.Header>¿Restricciones?</Message.Header>
                  <p>{this.props._selected?.Restricciones}</p>
              </Message>
            }
            {
              this.props._selected?.Supuestos &&
              <Message color="yellow">
                <Message.Header>¿Supuestos?</Message.Header>
                <p>{this.props._selected?.Supuestos}</p>
              </Message>
            }
            {
              this.props._selected?.Consideraciones &&
              <Message color="blue">
                  <Message.Header>Consideraciones?</Message.Header>
                <p>{this.props._selected?.Consideraciones}</p>
              </Message>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

