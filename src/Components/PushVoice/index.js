import React from 'react';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import styles from './style'


export default function PushVoice() {
    const onOpen_Voice = () => {
        console.log("Modal Voice")
      }


  return (
    <View style={styles.ButtonContainer}> 

        <TouchableOpacity onPress={onOpen_Voice} style={styles.Button}>

        <FontAwesome name="microphone" size={50} color="#fff"  />
        </TouchableOpacity>
        
    </View>
  );
}

