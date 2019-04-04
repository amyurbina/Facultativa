import React from 'React';
import{
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const reserva =(props) => {

    return(

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >
        
            <View style={{width: '100%',}}>
                <Text> Nombres y Apellidos </Text>
                <TextInput style={{ borderWidth: 1, borderColor: '#000',}} />
            </View>

            <View>
                <Text>Teléfono </Text>
                <TextInput />
            </View>

            <View>
                <Text>Fecha </Text>
                <TextInput />
            </View>

            <View>
                <Text>Hora </Text>
                <TextInput />
            </View>

            <View>
                <Text>Numero de Personas </Text>
                <TextInput />
            </View>

            <View>
                <Button title='Reservar' />
            </View>

        </View>
    )
}

export default reserva