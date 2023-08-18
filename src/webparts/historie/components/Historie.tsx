import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import { HistorieType } from "../models/HistorieType";
import { List, Image, Button, Modal } from "semantic-ui-react"

export default class Historie extends React.Component<HistorieType, {}> {
  public constructor(props: HistorieType) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<HistorieType> {
    return (
      <List.Item>
        <Image avatar src={require('../assets/icon.svg')} />
        <List.Content floated='right'>
          <Modal
            trigger={<Button color='teal'>Criterios de aceptación</Button>}
            header='Criterios de aceptación'
            content={this.props.Criterios}
            actions={['¡Entendido!']}
          />
          <Modal
            trigger={<Button color='blue'>Tareas</Button>}
            header='Tareas'
            content={this.props.Criterios}
            actions={['¡Entendido!']}
          />
        </List.Content>
        <List.Content>
          <List.Header as='a'>{this.props.Title}</List.Header>
          <List.Description>
            {this.props.Necesidad}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
