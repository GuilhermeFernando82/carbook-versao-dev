import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Card, DataTable, Paragraph, Title } from 'react-native-paper';
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
import { ButtonLogin, CleanText } from '../../components/Buttons';


const Home = ({navigation}) => {
  return (
    <Template>
      <Meio>
        <Container>
          <RowColumn>
            <Col Value="12">
              <Card>
                <Card.Actions>
                  <Button>Cadastrar novo veículo</Button>
                </Card.Actions>
                <Card.Content>
                <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>Modelo</DataTable.Title>
                      <DataTable.Title>Foto</DataTable.Title>
                      <DataTable.Title>Data de cadastro</DataTable.Title>
                      <DataTable.Title>Ações</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell>Informação exemplo</DataTable.Cell>
                      <DataTable.Cell>Informação exemplo</DataTable.Cell>
                      <DataTable.Cell>Informação exemplo</DataTable.Cell>
                      <DataTable.Cell>
                        <ButtonLogin>
                          <CleanText>Editar</CleanText>
                        </ButtonLogin>
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                      page={1}
                      numberOfPages={3}
                      onPageChange={page => {
                        console.log(page);
                      }}
                      label="1-2 of 6"
                    />
                  </DataTable>
                </Card.Content>
              </Card>
            </Col>
          </RowColumn>
        </Container>
      </Meio>
      <StatusBar style="auto" />
    </Template>
  );
}

export default Home;

