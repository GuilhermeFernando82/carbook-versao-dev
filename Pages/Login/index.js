import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from './status';
import { 
  KeyboardAvoidingView,
  Text,
  View 
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

const Login = ({navigation}) => {
  const [display, setDisplay]=useState('none');
  const [user, setUser]=useState(null);
  const [password, setPassword]=useState(null);
  const [login, setLogin]=useState(null);
  async function sendForm(){
    let response=await fetch('http://192.168.1.10:19000/Login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: user,
            password: password
        })
    });
    let json=await response.json();
    if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
        await AsyncStorage.clear();
    }else{
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        navigation.navigate('AreaRestrita');
    }
  }
  return (
    <Template>
      <Meio>
        <Container>
            <RowColumn>
              <Col Value="12">
                <View>
                  <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
                </View>
              </Col>
              <Col Value="12">
                <Card>
                  <Card.Content>
                    <Title>Login</Title>
                    <Paragraph>Preencha os campos abaixo para logar</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                      <Campo placeholder="Usuário" onChangeText={text=>setUser(text)} />
                      <Campo placeholder="Senha" onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                      <ButtonLogin
                        onPress={()=>sendForm()}
                      >
                        <CleanText>Logar</CleanText>
                      </ButtonLogin>
                      <ButtonClean
                        onPress={() => navigation.navigate('Recupera')}
                      >
                        <DarkText>Perdeu sua senha? Clique aqui para recuperar</DarkText>
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

export default Login;