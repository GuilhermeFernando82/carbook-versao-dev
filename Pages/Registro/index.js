import React from 'react';
import { 
  KeyboardAvoidingView 
} from 'react-native';
import { 
  Button, 
  Card, 
  Paragraph, 
  Title 
} from 'react-native-paper';
import {
  Template,
  Meio
} from './style'
import {
  Container, 
  Col,
  RowColumn
} from '../../components/Grids'
import {
  Campo
} from '../../components/Forms'
import { 
  ButtonClean,
  ButtonLogin,
  CleanText,
  DarkText
} from '../../components/Buttons';

const Registro = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <Template>
      <Meio>
        <Container>
            <RowColumn>
              <Col Value="12">
                <Card>
                  <Card.Content>
                    <Title>Registro</Title>
                    <Paragraph>Cadastre e confira as vantagens</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                      <Campo placeholder="Nome Completo" />
                      <Campo placeholder="Usuário" />
                      <Campo placeholder="E-mail" />
                      <Campo placeholder="Digite uma senha" secureTextEntry={true} />
                      <ButtonLogin>
                        <CleanText>Registrar</CleanText>
                      </ButtonLogin>
                      <ButtonClean
                        onPress={() => navigation.navigate('Login')}
                      >
                        <DarkText>Voltar ao login</DarkText>
                      </ButtonClean>
                    </KeyboardAvoidingView>
                  </Card.Actions>
                </Card>
              </Col>
            </RowColumn>
        </Container>
      </Meio>
    </Template>
  );
}

export default Registro;