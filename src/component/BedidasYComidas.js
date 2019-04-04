import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const BebidasYComidas =(props) => {

    return(

        <View style={{fontSize:30,textAlign:'center', alignItems: 'center', width: '100%'}} >
            <View>
                <Text> Menu de Bebidas y Comidas Típicas </Text>
            </View>

            <Image
           
                 source={require('./../../assets/pozol.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />
             <Image
                 
                 source={require('./../../assets/cacao.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

            <Image
                 
                 source={require('./../../assets/gallopinto.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

            <Image
                 
                 source={require('./../../assets/nacatamal.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}
            />

            <View>
                <Text> Clic en la imagen para ordenar </Text>
            </View>

        </View>
    )
}

export default BebidasYComidas

