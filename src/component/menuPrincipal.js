import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';

const MenuPrincipal =(props) => {

    return(

        <View  >
            <View>
                <Text style={styles.Titulo}>El Comal</Text>
            </View>

            <Image
                style={styles.banner}
                 source={require('./../../assets/banner-de-portada.jpg')}
                 width={50}
                 height={80}
            />

            <View>
                <Button title='Iniciar Sesión' 
                 width={50}
                 height={80} />
            </View>

            <View>
                <Button title='Contactanos' 
                 width={50}
                 height={80} />
            </View>

            <View style={styles.contenedorImagen}>
                <Image
                    style={styles.imagen1}
                    source={require('./../../assets/Imagen1.png')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    Titulo: {
        marginBottom: 15,
        color: 'green',
        fontSize: 30,
        
    },
    
    boton: {
        width: 100,
        height: 30,
        margin: 8,
        color: 'blue'
    },
    imagen1: {
        width: 300,
        height: 100,
        resizeMode: 'cover',
    },
    contenedorImagen: {
        width: '100%',
        alignItems: 'center',
        marginTop: 8,
    },
});

export default MenuPrincipal
