import React from 'react';
import { Container } from './component'
import styles from './styles'


import Footer from '../../Components/Footer'
import PushVoice from '../../Components/PushVoice'

import { Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <Container>
        <StatusBar style="light"  />
         <LinearGradient
        // Background Linear Gradient hidden
        colors={['rgba(15,95,104,1)', '#472d6a']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 800,
        }}
      >
          <View style={styles.WelcomeSection}>
            <Text style={styles.SubTitle}>Hello David!</Text>
            <Text style={styles.Title}>How Can I assist you?</Text>
          </View>
            
          <PushVoice />
          <Footer />

      </LinearGradient>
    </Container>
  );
}

