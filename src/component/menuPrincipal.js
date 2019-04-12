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

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%',}} >

            <View>
                <Text style={styles.Titulo}>El Comal</Text>
            </View>

           <View  style={styles.Banner} >
           <Image
                style={styles.imagenbanner}
                 source={require('./../../assets/banner-de-portada.jpg')} 
            
            />
           </View>

            <View style={styles.botonsesion} >
                <Button title='Iniciar Sesión' 
                 width={170}
                 height={80} 
                 top={25}
                 onPress={() => {
                    props.navigation.navigate('InicioDeSesion');
                }}
                 />
                 
            </View>

            <View  style={styles.botoncontacto} >
                <Button title='Contactanos' 
                 width={70}
                 height={80} 
                 top={25}
                 onPress={() => {
                    props.navigation.navigate('Contacto');
                }}
                 />
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
        color: '#078D0F',
        fontSize: 30,
    },
    
    imagen1: {
        width: 330,
        height: 110,
        resizeMode: 'cover',
        marginTop: 25,
    },
    contenedorImagen: {
        width: '80%',
        alignItems: 'center',
        marginTop: 8,
        resizeMode: 'cover', 
        height: '80%',
    },
        Banner:{
        width: '20%',
        alignItems: 'center',
        marginTop: 8,
         
        height: '20%',
    },
    botoncontacto:{
        width: '40%',
        alignItems: 'center',
        marginTop: 20,
        resizeMode: 'cover', 
    },
    botonsesion:{
        width: '30%',
        alignItems: 'center',
        marginTop: 14,
        resizeMode: 'cover', 
    },
    imagenbanner: {
        width: 330,
        height: 160,
        
    },
});

export default MenuPrincipal

