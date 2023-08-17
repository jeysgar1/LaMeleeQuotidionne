import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import { Button, Item, Modal } from 'semantic-ui-react';
import { ApiDataTypeModel } from '../../../models/ApiDataType';

export default class ApiDataType extends React.Component<ApiDataTypeModel, {}> {

  public constructor(props: ApiDataTypeModel) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<ApiDataTypeModel> {

    return (
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={require('../assets/icon.png')} />
          <Item.Content>
            <Item.Header>{this.props.Name}</Item.Header>
            <Item.Meta>
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
