import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
    PROFILE_ROUTE,
    BOTTOM_NAVBAR_ROUTE,
    TRANSACTION_ROUTE,
} from 'src/constant/route';
import BottomNavbar from 'src/screen/navbar/BottomNavbar';
import CustomHeader from 'src/component/native-base/CustomHeader';
import transaction from 'src/screen/transaction';
import profile from 'src/screen/profile';
// import {UserDataProps} from 'src/interface';

export type ProfileStackProps = {
    [PROFILE_ROUTE.HOME]: {};
    [PROFILE_ROUTE.EDIT]: {};
    [PROFILE_ROUTE.PASS_CHANGE]: {};
};

export type TransactionStackProps = {
    [TRANSACTION_ROUTE.HOME]: {};
    [TRANSACTION_ROUTE.TOP_UP]: {};
    [TRANSACTION_ROUTE.QR_PAY]: {};
    [TRANSACTION_ROUTE.TRANSFER]: {};
    [TRANSACTION_ROUTE.HISTORY]: {};
    [TRANSACTION_ROUTE.TOP_UP_RESULT]: {};
    [TRANSACTION_ROUTE.QR_PAY_RESULT]: {};
    [TRANSACTION_ROUTE.TRANSFER_RESULT]: {};
};

export type TabStackProps = {
    [TRANSACTION_ROUTE.STACK]: {};
    [TRANSACTION_ROUTE.HISTORY]: {};
    [PROFILE_ROUTE.STACK]: {};
};

// export type PlayerStackProps = {
//     [PLAYER_ROUTE.LIST]: {};
//     [PLAYER_ROUTE.PROFILE]: {
//         playerProps: UserDataProps;
//     };
//     [PLAYER_ROUTE.ADD_AVAILABLE]: {};
// };

const TabStack = createMaterialTopTabNavigator<TabStackProps>();
const TransactionStack = createStackNavigator<TransactionStackProps>();
const ProfileStack = createStackNavigator<ProfileStackProps>();
const AppStack = createStackNavigator();

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator
            initialRouteName={PROFILE_ROUTE.HOME}
            headerMode="none">
            <ProfileStack.Screen
                name={PROFILE_ROUTE.HOME}
                component={profile.ProfileHome}
            />
            <ProfileStack.Screen
                name={PROFILE_ROUTE.EDIT}
                component={profile.ProfileEdit}
            />
            <ProfileStack.Screen
                name={PROFILE_ROUTE.PASS_CHANGE}
                component={profile.ProfilePassChange}
            />
        </ProfileStack.Navigator>
    );
}

function TransactionNavigator() {
    return (
        <TransactionStack.Navigator
            initialRouteName={TRANSACTION_ROUTE.HOME}
            headerMode="none">
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.HOME}
                component={transaction.TransactionHome}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.TOP_UP}
                component={transaction.TransactionTopUp}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.QR_PAY}
                component={transaction.TransactionQrPay}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.TRANSFER}
                component={transaction.TransactionTransfer}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.TOP_UP_RESULT}
                component={transaction.TransactionTopUpResult}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.QR_PAY_RESULT}
                component={transaction.TransactionQrPayResult}
            />
            <TransactionStack.Screen
                name={TRANSACTION_ROUTE.TRANSFER_RESULT}
                component={transaction.TransactionTransferResult}
            />
        </TransactionStack.Navigator>
    );
}

// stack screen order is significant
function BottomNavbarTabNavigator() {
    return (
        <TabStack.Navigator
            tabBarPosition="bottom"
            swipeEnabled
            initialRouteName={TRANSACTION_ROUTE.STACK}
            tabBar={(props) => <BottomNavbar {...props} />}>
            <TabStack.Screen
                name={TRANSACTION_ROUTE.STACK}
                component={TransactionNavigator}
            />
            <TabStack.Screen
                name={TRANSACTION_ROUTE.HISTORY}
                component={transaction.TransactionHistory}
            />
            <TabStack.Screen
                name={PROFILE_ROUTE.STACK}
                component={ProfileNavigator}
            />
        </TabStack.Navigator>
    );
}

function AppNavigator() {
    return (
        <AppStack.Navigator
            initialRouteName={BOTTOM_NAVBAR_ROUTE}
            screenOptions={{
                headerShown: false,
                header: (props) => <CustomHeader title="" {...props} />,
            }}>
            <AppStack.Screen
                name={BOTTOM_NAVBAR_ROUTE}
                component={BottomNavbarTabNavigator}
            />
        </AppStack.Navigator>
    );
}

export default AppNavigator;
