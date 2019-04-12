import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
} from 'react-native';

const Lista =(props) => {

    const {datos}= props;
    console.log('Lista', datos)

    return(

        <View>
            <Text style={{fontSize:30,textAlign:'center'}}> Reservas </Text>
            <FlatList
                style={
                    {
                        width: '90%',
                        height: '90%',
                        backgroundColor:'#C7CCDE',
                        textAlign: 'center', left:13,
                    }
                }
                renderItem={
                    ({item}) => {
                        return(
                            <View style={{padding:10,backgroundColor:'#C7CCDE'}}  >
                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold", textAlign:'center'}}>Nombres y Apellidos </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Name}</Text>
                                
                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold", textAlign:'center'}}> Teléfono </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Telefono}</Text>

                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold",textAlign:'center'}}> Fecha </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Fecha}</Text>

                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold",textAlign:'center'}}> Hora </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Hora}</Text>

                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold",textAlign:'center'}}> Numero de Personas </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Personas}</Text>

                                <Text style={{fontSize:20,backgroundColor:'green',fontWeight: "bold",textAlign:'center'}}> Observaciones </Text>
                                <Text style={{fontSize:20,backgroundColor:'white'}}>{item.Observaciones}</Text>

                            </View>
                        )
                    }
                }
                data={datos}
            />

        </View>
    )
}

export default Lista

