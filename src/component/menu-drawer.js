import React from 'react'

import {
    createDrawerNavigator,
    createAppContainer,
    DrawerItems,
    SafeAreaView,
    
} from 'react-navigation'

import menuPrincial from './menuPrincipal'
import inicioDeSesion from './inicioDeSesion'
import registrarse from './registrarse'
import menuPrecios from './menuPrecios'
import reserva from './reserva'
import ComidasyBebidas from './../container/listaContainer'
import Contacto from './contacto';
import { StyleSheet, ScrollView, Image, } from 'react-native';

const CustomDrawerContentComponent = props => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Image
            style={styles.encabezado}
            source={require('./../../assets/logocomal.png')}
        />
        <DrawerItems {...props} />

      </SafeAreaView>
    </ScrollView>
  );
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A69E9E',

    },
    encabezado: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 51,
    }
});

const MenuDrawer = createDrawerNavigator ({
    
    Inicio:
         {
          
        screen: menuPrincial,
        navigationOptions: 
            {
                
            drawerLabel: 'Bienvenidos a "El Comal"',
            },
        },

    InicioDeSesion: 
        {
        screen: inicioDeSesion,
        navigationOptions: {
            drawerLabel: 'Inicio de Sesión',
        }
        },

    registrarse:
         {
        screen: registrarse,
        navigationOptions:{
            drawerLabel: ' Registrarse'
        }
        },

     MenuPrecio:
         {
        screen: menuPrecios,
        navigationOptions: {
            drawerLabel: 'Menú de Precio',
        }
        },

    Reservar:
    {
        screen: reserva,
        navigationOptions:{
            drawerLabel:'Reservar'
        }
    },

    Reservas:
    {
        screen: ComidasyBebidas,
        navigationOptions:{
            drawerLabel: 'Reservas'
        }
    },

    Contacto:
    {
        screen: Contacto,
        navigationOptions:{
            drawerLabel:'Contactanos'
        }
    }
},
    {
        contentComponent: CustomDrawerContentComponent,
    }
);

export default createAppContainer(MenuDrawer);
