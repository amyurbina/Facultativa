import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    Button,
    StyleSheet,
    
} from 'react-native';

const inicioDeSesion =(props) => {



    return(

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >

            <View>
            <Text style={styles.Titulo}>Inicio de Sesión </Text>
            </View>

            <View style={styles.Banner}  >
            <Image
                 style={styles.imagenelcomal}
                 source={require('./../../assets/imagenelcomal.png')} 
            />
            </View>
            
             <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Usuario o Teléfono </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}} >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}>Contraseña</Text>
                <TextInput  style={{ borderWidth: 2, borderColor: '#000',}} />
            </View>

            <View style={styles.botonacceder}>
                <Button title=' Acceder '
                onPress={() => {
                    props.navigation.navigate('MenuPrecio');
                }}
                 />
            </View>

                
            <View style={styles.botonregistrar}>
                <Button title='Registrarse'
                onPress={() => {
                    props.navigation.navigate('registrarse');
                }}
                
                />
                
            </View>
            
        </View>
        
    )
}


const styles = StyleSheet.create({

    Titulo: {
        marginBottom: 15,
        color: '#078D0F',
        fontSize: 30,
    },
    
    imagenelcomal: {
        width: 400,
        height: 200,
        
    },
    Banner:{
        width: '50%',
        alignItems: 'center',
        marginTop: 2,
        resizeMode: 'cover', 
        height: '40%',
    },

    botonacceder:{
        width: '40%',
        alignItems: 'center',
        marginTop: 20,
        resizeMode: 'cover', 
    },
    botonregistrar:{
        width: '40%',
        alignItems: 'center',
        marginTop: 14,
        resizeMode: 'cover', 
    },
});

export default inicioDeSesion


