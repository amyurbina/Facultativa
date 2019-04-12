import React from 'React';
import{
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Image
} from 'react-native';

const reservar =(props) => {

    return(

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >

            <View style={styles.Reservar}>
            <Image
                 style={styles.imagenReservar}
                 source={require('./../../assets/reserva.png')} 
            />
            </View>
        
            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Nombres y Apellidos </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Teléfono </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Fecha </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Hora </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Número de Personas </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={{width: '80%',}}  >
                <Text style={{textAlign: 'center', fontSize: 20, backgroundColor: '#9FD2A6', }}> Observaciones </Text>
                <TextInput style={{ borderWidth: 2, borderColor: '#000',}}/>
            </View>

            <View style={styles.botonacceder}>
                <Button title=' Reservar '
                 onPress={() => {
                    props.navigation.navigate('MenuPrecio');
                }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botonacceder:{
        width: '40%',
        alignItems: 'center',
        marginTop: 8,
        resizeMode: 'cover', 
    },
    imagenReservar: {
        width: 200,
        height:70,
        
    },

    Reservar:{
        width: '100%',
        alignItems: 'center',
      marginTop: 2,
        height: '12%',
    },
});

export default reservar

