import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { ApiSpecType } from '../models/ApiSpectType';


export default class ApiSpecification extends React.Component<ApiSpecType, {}> {
  public constructor(props: ApiSpecType) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<ApiSpecType> {

    return (
      <Card
        image={require("../assets/icon.png")}
        header={<div>{this.props.Title + ' ' + this.props.Numeroversion}</div>}
        meta={<div>{this.props.MetodoHTTP + ' ' + this.props.BaseURL}</div>}
        description={this.props.Necesidad}
      />
    );
  }
}
