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

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >

            <View>
                <Text>Inicio de Sesión</Text>
            </View>

            <Image
                
                 source={require('./../../assets/imagenelcomal.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
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