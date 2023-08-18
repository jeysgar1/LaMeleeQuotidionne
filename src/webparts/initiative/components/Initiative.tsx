import 'semantic-ui-css/semantic.min.css'
import * as React from "react";
import { Message, Image, Header, Segment, Button, Container, Dropdown, DropdownItemProps, Icon } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { InitiativeProps } from '../models';
import InitiativeType from '../models/InitiativeType';
import { getInitiative } from '../slices/getById';
import { getInitiatives } from '../slices/getAll';
import { createRef, useEffect } from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot'

function Initiative(props: InitiativeProps): React.ReactElement<InitiativeProps> {

  const iniciativas = useAppSelector((state) => state.initiatives)
  const dispatch = useAppDispatch()
  const ref = createRef()
  const [image, takeScreenShot] = useScreenshot()

  const download = (image: any, { name = 'img', extension = 'png' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const getImage = () => takeScreenShot(ref.current)

  useEffect(() => {
    if (image) {
      download(image, { name: 'Iniciativa', extension: 'png' })
    }
  }, [image])

  if (!iniciativas.items) {
    dispatch(getInitiatives());
  }

  const SelectOne = (): JSX.Element => {

    const indexSelected: DropdownItemProps[] = []
    if (iniciativas.items) {
      iniciativas.items?.map((element: InitiativeType) => {
        indexSelected.push({
          key: element.Nombre,
          text: element.Nombre + ' - ' + element.Title,
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
                <Dropdown
                  fluid
                  search
                  searchInput={{ type: 'text' }}
                  selection
                  options={indexSelected}
                  onChange={(event, data) => dispatch(getInitiative(data.value))}
                  placeholder='Selecciona una iniciativa'
                />
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

  const View = (): JSX.Element => {
    return (
      <Container>
        <Header as='h2' icon textAlign='center'>
          <Image src={require('../assets/icon.svg')} size='small' />
          <Header.Content>{iniciativas.item?.Title}</Header.Content>
          <Header.Subheader>{iniciativas.item?.Nombre}</Header.Subheader>
        </Header>
        <Segment.Group horizontal>
          {
            iniciativas.item?.Necesidad &&
            <Segment>
              <Message color="purple">
                <Message.Header>¿Necesidad del usuario?</Message.Header>
                  <p>{iniciativas.item?.Necesidad}</p>
              </Message>
            </Segment>

          }
          {
            iniciativas.item?.Alcance &&
            <Segment>
              <Message color="olive">
                <Message.Header>¿Alcance técnico?</Message.Header>
                  <p>{iniciativas.item?.Alcance}</p>
              </Message>
              </Segment>
          }
          {
            iniciativas.item?.Restricciones &&
            <Segment>
              <Message color="red">
                <Message.Header>¿Restricciones?</Message.Header>
                  <p>{iniciativas.item?.Restricciones}</p>
              </Message>
              </Segment>
          }
          {
            iniciativas.item?.Supuestos &&
            <Segment>
              <Message color="yellow">
                <Message.Header>¿Supuestos?</Message.Header>
                  <p>{iniciativas.item?.Supuestos}</p>
              </Message>
              </Segment>
          }
          {
            iniciativas.item?.Consideraciones &&
            <Segment>
              <Message color="blue">
                  <Message.Header>Consideraciones?</Message.Header>
                  <p>{iniciativas.item?.Consideraciones}</p>
              </Message>
              </Segment>
          }
        </Segment.Group>
        <Button.Group icon floated='right'>
          <Button onClick={() => takeScreenShot(ref.current)}>
            <Icon name='file image outline' />
          </Button>
          <Button>
            <Icon name='file pdf' />
          </Button>
          <Button>
            <Icon name='mail outline' />
          </Button>
        </Button.Group>
      </Container>
    )
  }

  const page = iniciativas.item ? View() : SelectOne();
  return (
    page
  )
}


