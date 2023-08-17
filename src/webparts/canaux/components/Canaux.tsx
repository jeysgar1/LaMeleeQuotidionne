import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import { CanalType } from "../../../models/CanalType";
import { Label } from "semantic-ui-react";


export default class Canaux extends React.Component<
  CanalType,
  {}
> {
  colors: string[] = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
  ];

  public constructor(props: CanalType) {
    super(props);
    this.state = { };
  }

  public async componentDidMount() {
    this.setState({
      
    });
  }

  public render(): React.ReactElement<CanalType> {
    return (
      <div>
        <Label as="a" color="pink" tag>
          {this.props.Name}
        </Label>
      </div>
    );
  }
}
