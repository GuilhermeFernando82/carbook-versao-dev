import React, {useState,useEffect} from 'react';
import { BackHandler, Alert} from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    Comercial,
    Home,
    Lojas,
    Perfil,
    Promocoes,
    Social
} from '../rotas';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';

export default function AreaRestrita({navigation}) {

    const Tab = createMaterialBottomTabNavigator();
    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    navigation.navigate('Home');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);
    return (
        <>
        <Appbar.Header>
            <Appbar.BackAction />
            <Appbar.Content title="Carbook" subtitle="Area Cliente" />
            <Appbar.Action icon="dots-vertical" onPress={() => navigation.navigate('Perfil')} />
        </Appbar.Header>
        <Tab.Navigator
                activeColor='#79589f'
                inactiveColor='#644884'
                barStyle={css.area_tab}
        >
            <Tab.Screen
                    name="Comercial"
                    component={Comercial}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="car" size={20} color="#79589f" />
                    )
                }}
            />
            <Tab.Screen
                    name="Lojas"
                    component={Lojas}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="archive" size={20} color="#79589f" />
                    )
                }}
            />
            <Tab.Screen
                    name="Promoções"
                    component={Promocoes}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="archive" size={20} color="#79589f" />
                    )
                }}
            />
            <Tab.Screen
                    name="Social"
                    component={Social}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#79589f" />
                    )
                }}
            />
            <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="user" size={20} color="#79589f" />
                    )
                }}
            />
            <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="home" size={20} color="#79589f" />
                    )
                }}
            />
        </Tab.Navigator>
       </> 
    );
}
