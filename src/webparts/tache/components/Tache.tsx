import * as React from 'react';
import { TacheType } from '../models/TacheType';
import { Item } from 'semantic-ui-react';

export default class Tache extends React.Component<TacheType, {}> {
  
  public constructor(props: TacheType) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<TacheType> {

    return (
      <Item>
        <Item.Image size='tiny' src={require('../assets/icon.svg')} />
        <Item.Content>
          <Item.Header>{this.props.Title}</Item.Header>
          <Item.Description>{this.props.Necesidad}</Item.Description>
        </Item.Content>
      </Item>
    );
  }
}
