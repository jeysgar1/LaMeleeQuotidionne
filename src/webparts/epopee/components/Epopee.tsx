import 'semantic-ui-css/semantic.min.css';
import * as React from "react";

import { Container, Item, Segment, DropdownItemProps, Dropdown, Message, Divider } from 'semantic-ui-react';
import { EpopeeType } from '../models/EpopeeType';
import { EpopeeState } from '../models/EpopeeState';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { EpopeeProps } from '../models/EpopeeProps';
import { InitiativeState } from '../../initiative/models';
import InitiativeType from '../../initiative/models/InitiativeType';
import { getEpopeeByInitiative } from '../slices/getByInitiative';

let iniciativas: InitiativeState
let epicas: EpopeeState
let dispatch: any


function ViewItem(element: EpopeeType): JSX.Element {
  return (
    <Item>
      <Item.Image size='small' src={require('../assets/icon.svg')} />
      <Item.Content>
        <Item.Header>{element.Title}</Item.Header>
        <Item.Description>{element.Necesidad}</Item.Description>
        <Item.Extra>

        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

function View(): JSX.Element {
  return (
    <Container>
      <Item.Group divided>
        {
          epicas.items?.map((element) => {
            ViewItem(element)
          })
        }
      </Item.Group>
    </Container>
  )
}

function Epopee(props: EpopeeProps): React.ReactElement<EpopeeProps> {

  epicas = useAppSelector((state) => state.epopees)
  dispatch = useAppDispatch()

  const page = epicas.initiative ? View() : SelectOne();
  return (
    page
  )
}


const SelectOne = (): JSX.Element => {

  const indexSelected: DropdownItemProps[] = []
  if (iniciativas.items) {
    iniciativas.items?.map((element: InitiativeType) => {
      indexSelected.push({
        key: element.Nombre,
        text: element.Nombre,
        value: element.ID,
        image: { avatar: true, src: require('../assets/icon.svg') },
      })
    })
    return (
      <div>
        <Message
          style={{ textAlign: "center" }}
          size="big"
          color="blue"
          header='¡Estamos listos! :)'
          content={
            <Container>
              <Segment.Group>
                <Segment>
                  <Divider horizontal>Selecciona una iniciativa</Divider>
                </Segment>
                <Segment>
                  <Dropdown
                    fluid
                    search
                    searchInput={{ type: 'text' }}
                    selection
                    options={indexSelected}
                    onChange={(event, data) => dispatch(getEpopeeByInitiative(data.value))}
                    placeholder='Selecciona una iniciativa'
                  />
                </Segment>
              </Segment.Group>
            </Container>
          }
        />
      </div>
    )
  }
  else {
    return (
      <Message negative>
        <Message.Header>¡Houston tenemos problemas! No encontramos ninguna iniciativa que puedas gestionar </Message.Header>
        <p>Estamos trabajando a toda marcha por una versión que permita crear una iniciativa, vuelve pronto :)</p>
      </Message>
    )
  }
}

export default Epopee
