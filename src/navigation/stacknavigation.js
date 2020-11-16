import React from 'react'

import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import Routes from './routes'
import HomeScreen from '../screens/home'
import GoStartScreen from '../screens/gostart'
import CadStep1Screen from '../screens/cadastro/step1'
import CadStep2Screen from '../screens/cadastro/step2'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
            initialRouteName={Routes.GO_START}>
            <Stack.Screen name={Routes.HOME} component={HomeScreen} />
            <Stack.Screen name={Routes.GO_START} component={GoStartScreen} />
            <Stack.Screen name={Routes.CADASTRO_1} component={CadStep1Screen} />
            <Stack.Screen name={Routes.CADASTRO_2} component={CadStep2Screen} />
        </Stack.Navigator>
    )
}