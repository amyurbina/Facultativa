import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const BebidasYComidas =(props) => {

    return(

        <View>
            <View>
                <Text> Menu de Bebidas y Comidas Típicas </Text>
            </View>

            <Image
           
                 source={require('./../../assets/pozol.png')}
            />
             <Image
                 
                 source={require('./../../assets/cacao.png')}
            />

            <Image
                 
                 source={require('./../../assets/gallopinto.png')}
            />

            <Image
                 
                 source={require('./../../assets/nacatamal.png')}
            />

            <View>
                <Text> Clic en la imagen para ordenar </Text>
            </View>

        </View>
    )
}

export default BebidasYComidas

