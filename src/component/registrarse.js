import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

const Registrarse=(props) => {

    return(
        <View>
            <View>
                <Text> Registrarse </Text>
            </View>

            <Image
                 
                 source={require('./../../assets/imagenelcomal.png')}
            />

            <View>
                <Text> Nombres y Apellidos </Text>
                <TextInput />
            </View>

            <View>
                <Text> Usuario o Teléfono </Text>
                <TextInput />
            </View>

            <View>
                <Text> Contraseña </Text>
                <TextInput />
            </View>

            <View>
                <Button title='Registrarse' />
            </View>

            <Image
                 
                 source={require('./../../assets/gracias.png')}
            />

        </View>

    )
}

export default Registrarse

