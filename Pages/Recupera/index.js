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

const Recupera = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <Template>
      <Meio>
        <Container>
            <RowColumn>
              <Col Value="12">
                <Card>
                  <Card.Content>
                    <Title>Perdeu a senha?</Title>
                    <Paragraph>Digite seu e-mail que lhe enviaremos o link para recuperar sua senha</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                      <Campo placeholder="E-mail" />
                      <ButtonLogin>
                        <CleanText>Recuperar</CleanText>
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

export default Recupera;