import React from 'react'

import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation'

import menuPrincial from './menuPrincipal'
import inicioDeSesion from './inicioDeSesion'
import registrarse from './registrarse'
import menuPrecios from './menuPrecios'
import BebidasYComidas from './BedidasYComidas'
import reserva from './reserva'


const MenuDrawer = createDrawerNavigator ({
    Inicio:
         {
        screen: menuPrincial,
        navigationOptions: 
            {
            drawerLabel: 'Bienvenidos a "El Comal"',
            },
        },

    inicioDeSesion: 
        {
        screen: inicioDeSesion,
        },

    registrarse:
         {
        screen: registrarse,
        },

    menuPrecios:
         {
        screen: menuPrecios,
        },

    BebidasYComidas:
         {
        screen: BebidasYComidas,
        },

    reserva:
    {
        screen: reserva,
    }
}, 

);

export default createAppContainer(MenuDrawer);