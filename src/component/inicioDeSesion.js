import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    Button,
    StyleSheet
} from 'react-native';

const inicioDeSesion =(props) => {

    return(

        <View>
            <View>
                <Text>Inicio de Sesión</Text>
            </View>

            <Image
                
                 source={require('./../../assets/imagenelcomal.png')}
            />
             <View>
                <Text> Usuario o Teléfono </Text>
                <TextInput />
            </View>
            <View>
                <Text>Contraseña</Text>
                <TextInput />
            </View>

            <View>
                <Button title=' Acceder ' />
            </View>

            <View>
                <Button title='Registrarse' />
            </View>
            
        </View>
    )
}

export default inicioDeSesion