import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Store} from 'src/context';
import AppNavigator from 'src/navigation/AppNavigator';
import AuthNavigator from 'src/navigation/AuthNavigator';

const RootStack = createStackNavigator();

export default function RootContainer() {
    const globalState = useContext(Store.StateContext);
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {globalState.user && globalState.axios ? (
                    <RootStack.Screen
                        name="AuthRoute"
                        component={AuthNavigator}
                    />
                ) : (
                    <RootStack.Screen
                        name="AppRoute"
                        component={AppNavigator}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
