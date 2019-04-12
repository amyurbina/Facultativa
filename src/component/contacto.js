import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

const Contacto  =(props) => {

    return(

        <View>

            <View>
                <Text style={{textAlign: 'center', fontSize: 25, backgroundColor: '#9FD2A6', fontWeight: "bold" }}>Ubícanos</Text>
            </View>

            <View style={styles.ElComal}>
            <Image
                 style={styles.imagenelcomal}
                 source={require('./../../assets/elcomal.jpg')} 
            />
            </View>

            <View>
                <Text style={{textAlign: 'center', fontSize: 25, backgroundColor: '#9FD2A6', fontWeight: "bold" }}>Contactanos</Text>
                <Text style={{textAlign: 'center',color: '#051F82',fontSize: 30,}}> 505 8907-9338 </Text>
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
    telefono: {
        marginBottom: 15,
        
    },

    imagenelcomal: {
        width: 360,
        height:250,
        
    },
});

export default Contacto
