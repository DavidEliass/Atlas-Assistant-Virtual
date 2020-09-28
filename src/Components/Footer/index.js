import React from 'react';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';

import { Entypo, FontAwesome } from '@expo/vector-icons'

import styles from './style'


export default function Footer() {
    const onOpen_Config = () => {
        console.log("Modal Board")
      }

      const onOpen_Keyboard = () => {
        console.log("Clique Computado")
      }


  return (
    <View style={styles.Container}> 
     <TouchableOpacity onPress={onOpen_Keyboard}>
        <View>
            <Entypo name="keyboard" size={35} color="#fff" />
        </View>
    </TouchableOpacity>

        <View>
            <TouchableOpacity onPress={onOpen_Config}>
                <FontAwesome name="th-large" size={35} color="#fff" />
            </TouchableOpacity >
            

        </View>
    </View>
  );
}

