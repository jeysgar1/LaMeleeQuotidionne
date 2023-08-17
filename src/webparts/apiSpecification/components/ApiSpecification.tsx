import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import { Button, Item, Modal } from 'semantic-ui-react';
import { ApiSpecType } from '../../../models/ApiSpectType';


export default class ApiSpecification extends React.Component<ApiSpecType, {}> {
  public constructor(props: ApiSpecType) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<ApiSpecType> {

    return (
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={require('../assets/icon.png')} />

          <Item.Content>
            <Item.Header>{this.props.Name}</Item.Header>
            <Item.Meta>
              <span className='price'>{this.props.Verb}</span>
              <span className='stay'>{this.props.BaseURL}</span>
              <span className='stay'>{this.props.Version}</span>
            </Item.Meta>
            <Item.Description>{this.props.Description}</Item.Description>
            <Modal
              trigger={<Button>Ver especificación</Button>}
              header='Especificación técnica'
              content={
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.HtmlCode }}
                />
              }
              actions={[{ key: 'done', content: 'Listo!', positive: true }]}
            />
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
