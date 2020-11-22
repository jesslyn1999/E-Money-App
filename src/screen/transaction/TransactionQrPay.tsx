import React from 'react';
import {Button, Container, View} from 'native-base';
import CustomHeader from 'src/component/native-base/CustomHeader';
import {Image, StyleSheet} from 'react-native';

export default function TransactionQrPay() {
    return (
        <Container>
            <CustomHeader title="QR Payment" />
            <View style={styles.viewContainer}>
                <Button style={styles.viewAvatarImage}>
                    <Image
                        source={{
                            uri:
                                'https://randomuser.me/api/portraits/men/3.jpg',
                        }}
                        style={styles.avatarImage}
                    />
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewAvatarImage: {
        height: '50%',
        alignSelf: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        aspectRatio: 1,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
});
