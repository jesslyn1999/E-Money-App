import React from 'react';
import {Header, Left, Body, Button, Icon, Title, Right} from 'native-base';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

interface InjectedProps {
    title: string;
    RightHeader: React.FC;
    navigation: any;
    state: any;
}

export default function CustomHeader(props: any) {
    const {title, RightHeader}: InjectedProps = props;
    const navigation = useNavigation();
    return (
        <Header>
            {navigation.canGoBack() && (
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            )}
            <Body>
                <Title>{title}</Title>
            </Body>
            {!!RightHeader && (
                <Right>
                    <RightHeader />
                </Right>
            )}
        </Header>
    );
}

CustomHeader.propTypes = {
    title: PropTypes.string.isRequired,
    RightHeader: PropTypes.any,
};
