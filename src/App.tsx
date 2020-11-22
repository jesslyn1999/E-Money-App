import React from 'react';
import {Container, StyleProvider} from 'native-base';
import {Store} from 'src/context';
import RootNavigator from 'src/navigation';
import getTheme from 'src/theme/native-base-theme/components';
import customVariable from 'src/theme/customVariable';

export default function App() {
    return (
        <StyleProvider style={getTheme(customVariable)}>
            <Container>
                <Store.StateProvider>
                    <RootNavigator />
                </Store.StateProvider>
            </Container>
        </StyleProvider>
    );
}
