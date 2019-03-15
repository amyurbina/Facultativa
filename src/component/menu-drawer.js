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

const MenuDrawer = createDrawerNavigator ({
    Inicio:
         {
        screen: menuPrincial,
        navigationOptions: 
            {
            drawerLabel: 'Inicio de la App',
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
}, 

);

export default createAppContainer(MenuDrawer);