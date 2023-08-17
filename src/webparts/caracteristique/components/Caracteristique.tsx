import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { CaracteristiqueType } from "../../../models/CaracteristiqueType";
import { Badge, Card, Stack } from "react-bootstrap";

export default class Caracteristique extends React.Component<
  CaracteristiqueType,
  {}
> {
  public constructor(props: CaracteristiqueType) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<CaracteristiqueType> {
    return (
      <Card
        bg="success"
        key={this.props.name}
        text="white"
        style={{ width: "18rem", borderRadius:"10px", padding:"5px" }}
        className="mb-2"
      >
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.description}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" gap={2}>
            <Badge bg="light" text="dark">{this.props.appKey}</Badge>
            <Badge bg="light" text="dark">{this.props.channelKey}</Badge>
          </Stack>
        </Card.Footer>
      </Card>
    );
  }
}
