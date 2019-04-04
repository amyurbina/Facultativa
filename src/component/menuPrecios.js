import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';

const menuPrecios =(props) => {

    return(
        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >

            <View>
                <Text>Menu</Text>
            </View>

            <View>
                <Text>Selecciona lo que deseas ordenar</Text>
            </View>

            <View>
                <Button title='Platillos y Bebidas' />
            </View>
            <View>
                <Text> Precios </Text>
            </View>

            <Image
                 
                 source={require('./../../assets/Menu.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />
             <Image
                 
                 source={require('./../../assets/dinero.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

            <Image
                 
                 source={require('./../../assets/propina.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

        </View>
    )
}

export default menuPrecios