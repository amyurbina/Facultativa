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
        <View>
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
                 
                 source={require('./../../assets/Menu.png')}
            />
             <Image
                 
                 source={require('./../../assets/dinero.png')}
            />

            <Image
                 
                 source={require('./../../assets/propina.png')}
            />

        </View>
    )
}

export default menuPrecios