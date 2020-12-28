import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
//Componentes
import{
  Template,
  Meio
} from './style'
import{
  Container,
  Col,
  RowColumn
} from '../../components/Grids'


const Promocoes = ({navigation}) => {
  return (
    <Template>
      <Meio>
        <Container>
          <RowColumn>
            <Col Value="12">
              <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            </Col>
          </RowColumn>
        </Container>
      </Meio>
      <StatusBar style="auto" />
    </Template>
  );
}

export default Promocoes;

