import React from 'react';
import {Button, Container, Form, Text, View} from 'native-base';
import CustomHeader from 'src/component/native-base/CustomHeader';
import {Image, StyleSheet} from 'react-native';
import CustomInput from 'src/component/native-base/CustomInput';

export default function TransactionTransfer() {
    return (
        <Container>
            <CustomHeader title="Top Up" />
            <View style={styles.viewContainer}>
                <View style={styles.viewAvatarImage}>
                    <Image
                        source={{
                            uri:
                                'https://randomuser.me/api/portraits/men/3.jpg',
                        }}
                        style={styles.avatarImage}
                    />
                </View>
                <View style={styles.subViewContainer}>
                    <Form>
                        <CustomInput
                            label="Nominal Transfer"
                            keyboardType="numeric"
                            stackedLabel
                            enableErase
                            placeholder={'Masukan nominal...'}
                        />
                        <CustomInput
                            label="Nomor Handphone Penerima"
                            keyboardType="numeric"
                            stackedLabel
                            enableErase
                            placeholder={'Masukan nomor handphone...'}
                        />
                        <Button block style={styles.marginButton}>
                            <Text>Verifikasi</Text>
                        </Button>
                    </Form>
                </View>
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
    subViewContainer: {
        width: '90%',
    },
    viewAvatarImage: {
        height: '40%',
        alignSelf: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        aspectRatio: 1,
        marginBottom: 30,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    marginButton: {
        marginVertical: 20,
    },
});
