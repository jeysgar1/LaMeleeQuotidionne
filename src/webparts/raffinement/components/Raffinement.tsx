import "semantic-ui-css/semantic.min.css";
import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { RaffinementProps } from '../models';

export default class Raffinement extends React.Component<RaffinementProps, {}> {

  constructor(props: RaffinementProps) {
    super(props);
  }

  public render(): React.ReactElement<RaffinementProps> {
    return (
      <Container>

      </Container>
    );
  }
}
