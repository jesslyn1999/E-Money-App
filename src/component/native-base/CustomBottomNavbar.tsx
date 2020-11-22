import React from 'react';
import PropTypes from 'prop-types';
import {Footer, FooterTab, Button, Icon, Text, Badge} from 'native-base';

interface TabObjectProps {
    vertical?: boolean;
    icon_name?: string;
    icon_type?:
        | 'AntDesign'
        | 'Entypo'
        | 'EvilIcons'
        | 'Feather'
        | 'FontAwesome'
        | 'FontAwesome5'
        | 'Foundation'
        | 'Ionicons'
        | 'MaterialCommunityIcons'
        | 'MaterialIcons'
        | 'Octicons'
        | 'SimpleLineIcons'
        | 'Zocial';
    text?: string;
    badge?: any;
    onPress: any;
    active: boolean;
}

export default function CustomBottomNavbar(props: any) {
    const {tabObjects}: {tabObjects: TabObjectProps[]} = props;

    return (
        <Footer>
            <FooterTab>
                {tabObjects.map((item: TabObjectProps, index: number) => (
                    <Button
                        key={'tab-' + index}
                        badge={!!item.badge}
                        vertical={item.vertical}
                        active={item.active}
                        onPress={() => item.onPress()}>
                        {!!item.badge && <Badge>{item.badge()}</Badge>}
                        {item.icon_name && (
                            <Icon name={item.icon_name} type={item.icon_type} />
                        )}
                        {item.text && <Text>{item.text}</Text>}
                    </Button>
                ))}
            </FooterTab>
        </Footer>
    );
}

CustomBottomNavbar.propTypes = {
    tabObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
