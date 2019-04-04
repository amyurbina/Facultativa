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
        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%',resizeMode: 'cover',}} >
            <View>
                <Text> Registrarse </Text>
            </View>

            <Image
                  
                 source={require('./../../assets/imagenelcomal.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
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
                 
                 source={require('./../../assets/gracias.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

        </View>

    )
}

export default Registrarse

