import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Home from './Pages/Home'

export default function Routes() {
    return (
        <NavigationContainer >
            <Navigator screenOptions={ { headerShown: false } }>
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}