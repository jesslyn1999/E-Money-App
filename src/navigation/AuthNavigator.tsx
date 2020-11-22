import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTH_ROUTE} from 'src/constant/route';
import {Login, Register} from 'src/screen/auth';

const AuthStack = createStackNavigator();

function AuthNavigator() {
    return (
        <AuthStack.Navigator
            initialRouteName={AUTH_ROUTE.LOGIN}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name={AUTH_ROUTE.LOGIN} component={Login} />
            <AuthStack.Screen name={AUTH_ROUTE.SIGN_UP} component={Register} />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;
