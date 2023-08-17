import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import { AppType } from "../../../models/AppType";
import { Item } from "semantic-ui-react";

export default class App extends React.Component<AppType, {}> {


  public constructor(props: AppType) {
    super(props);
    this.state = {  };
  }


  public render(): React.ReactElement<AppType> {
    return (
       <Item.Group>
       <Item>
      <Item.Image size='tiny' src={require("../assets/icon.png")} />

      <Item.Content>
        <Item.Header as='a'>{this.props.Name}</Item.Header>
        <Item.Meta>{this.props.Description}</Item.Meta>
      </Item.Content>
    </Item>
      </Item.Group>
    );
  }
}
