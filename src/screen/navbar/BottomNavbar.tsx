import React from 'react';
import PropTypes from 'prop-types';
import CustomBottomNavbar from 'src/component/native-base/CustomBottomNavbar';
import {route} from 'src/constant';

export default function BottomNavbar(props: any) {
    const {navigation, navigationState} = props;
    const tabObjects = [
        {
            vertical: true,
            icon_name: 'md-logo-github',
            icon_type: 'Ionicons',
            text: 'Home',
            onPress: () => navigation.navigate(route.TRANSACTION_ROUTE.STACK),
            active: navigationState.index === 0,
        },
        {
            vertical: true,
            icon_name: 'arrow-redo',
            icon_type: 'Ionicons',
            text: 'History',
            onPress: () => navigation.navigate(route.TRANSACTION_ROUTE.HISTORY),
            active: navigationState.index === 1,
        },
        {
            vertical: true,
            icon_name: 'person',
            icon_type: 'MaterialIcons',
            text: 'Profile',
            onPress: () => navigation.navigate(route.PROFILE_ROUTE.STACK),
            active: navigationState.index === 2,
        },
    ];
    return <CustomBottomNavbar tabObjects={tabObjects} {...props} />;
}

BottomNavbar.propTypes = {
    navigation: PropTypes.any.isRequired,
};
