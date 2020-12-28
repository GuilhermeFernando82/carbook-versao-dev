import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import { Appbar, Button, Card, Paragraph, Title } from 'react-native-paper';
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
import {
  Campo
} from '../../components/Forms'
import { 
  ButtonClean,
  ButtonLogin,
  CleanText,
  DarkText
} from '../../components/Buttons';

const Perfil = ({navigation}) => {
    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
       async function getIdUser()
       {
           let response=await AsyncStorage.getItem('userData');
           let json=JSON.parse(response);
           setIdUser(json.id);
       }
       getIdUser();
    });

    async function sendForm(){
        let response=await fetch(`${config.urlRoot}verifyPass`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json=await response.json();
        setMsg(json);
    }
  return (
    <Template>
      <Meio>
        <Container>
          <RowColumn>
            <Col Value="12">
              <Card>
                <Card.Content>
                  <Campo placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} />
                  <Campo placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} />
                  <Campo placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} />
                  <ButtonLogin
                    onPress={()=>sendForm()}
                  >
                    <CleanText>Logar</CleanText>
                  </ButtonLogin>
                </Card.Content>
                <Card.Actions>
                  
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

export default Perfil;

