import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const menuPrecios =(props) => {

    return(
        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >

            <View>
            <Text style={styles.Titulo}> Menú </Text>
            </View>

            <View >
                <Text style={styles.CatPrecio}> Catalogo de Precios </Text>
            </View>

            <View>
                <Text style={styles.Titulo}> Precios </Text>
            </View>

            <View style={styles.Menu}>
            <Image
                 style={styles.imagenMenu}
                 source={require('./../../assets/Menu.png')} 
            />
            </View>
            
            <View style={styles.Dinero} >
            <Image
                 style={styles.imagenDinero}
                 source={require('./../../assets/dinero.png')} 
            />
            </View>

            <View style={styles.Propina} >
            <Image
                 style={styles.imagenPropina}
                 source={require('./../../assets/propina.png')} 
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
    CatPrecio: {
        marginBottom: 15,
        color: '#051F82',
        fontSize: 30,
    },

    imagenMenu: {
        width: 360,
        height:250,
        
    },

    Menu:{
        width: '50%',
        alignItems: 'center',
        marginTop: 14,
        height: '40%',
    },

    Dinero:{
        width: '10%',
        alignItems: 'center',
        marginTop: 4,
        height: '10%',
    },

    imagenDinero: {
        width: 100,
        height: 100,
        
    },
    Propina:{
        width: '30%',
        alignItems: 'center',
        marginTop: 2,
        height: '20%',
    },

    imagenPropina: {
        width: 150,
        height: 150,
        
    },

});
export default menuPrecios

