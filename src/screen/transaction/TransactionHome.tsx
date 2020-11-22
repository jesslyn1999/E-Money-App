import React from 'react';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Icon,
    List,
    Text,
    View,
} from 'native-base';
import TransactionCard from 'src/component/transaction/TransactionCard';
import {StyleSheet} from 'react-native';
import {TransactionStackProps} from 'src/navigation/AppNavigator';
import {TRANSACTION_ROUTE} from 'src/constant/route';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function TransactionHome() {
    const navigation = useNavigation<
        StackNavigationProp<TransactionStackProps, TRANSACTION_ROUTE.HOME>
    >();
    const isFocused = useIsFocused();

    const transactionDatum = [
        {
            id: 1,
            amount: '50.000',
            recipient: '08xxxxxxxx',
            date: '20/08/2020',
        },
        {
            id: 2,
            amount: '1.000.000',
            recipient: '06xxxxxxxx',
            date: '21/08/2020',
        },
        {
            id: 3,
            amount: '2.000.000',
            recipient: '0612435435',
            date: '21/08/2020',
        },
    ];
    return (
        <Container>
            <Container>
                <Card style={styles.cardContainer}>
                    <CardItem>
                        <Body>
                            <Text>Saldo Anda</Text>
                            <Text>Rp. xxxx</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Content>
                    <View style={styles.contentContainer}>
                        <Card style={styles.cardView}>
                            <CardItem style={styles.cardItem}>
                                <View style={styles.center}>
                                    <Button
                                        large
                                        icon
                                        light
                                        onPress={() => {
                                            navigation.navigate(
                                                TRANSACTION_ROUTE.TOP_UP,
                                                {},
                                            );
                                        }}
                                        style={styles.button}>
                                        <Icon
                                            name="person"
                                            type="MaterialIcons"
                                        />
                                    </Button>
                                    <Text>Top Up</Text>
                                </View>
                                <View style={styles.center}>
                                    <Button
                                        large
                                        icon
                                        light
                                        onPress={() => {
                                            navigation.navigate(
                                                TRANSACTION_ROUTE.QR_PAY,
                                                {},
                                            );
                                        }}
                                        style={styles.button}>
                                        <Icon
                                            name="person"
                                            type="MaterialIcons"
                                        />
                                    </Button>
                                    <Text>QR Pay</Text>
                                </View>
                                <View style={styles.center}>
                                    <Button
                                        large
                                        icon
                                        light
                                        onPress={() => {
                                            navigation.navigate(
                                                TRANSACTION_ROUTE.TRANSFER,
                                                {},
                                            );
                                        }}
                                        style={styles.button}>
                                        <Icon
                                            name="person"
                                            type="MaterialIcons"
                                        />
                                    </Button>
                                    <Text>Transfer</Text>
                                </View>
                            </CardItem>
                        </Card>

                        <View>
                            <Text>5 Transaksi Terakhir Anda</Text>
                            <List style={styles.marginVerticalSmView}>
                                {transactionDatum.map((item, index) => (
                                    <TransactionCard
                                        key={'transaction-' + index}
                                        data={item}
                                    />
                                ))}
                            </List>
                        </View>
                    </View>
                </Content>
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        paddingTop: '15%',
    },
    cardView: {
        marginTop: 40,
        marginBottom: 40,
    },
    center: {
        alignItems: 'center',
    },
    marginVerticalSmView: {
        marginVertical: 10,
    },
    button: {
        borderRadius: 8,
    },
    cardItem: {
        backgroundColor: 'rgba(192, 18, 26, 1)',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingLeft: '7%',
        paddingRight: '7%',
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: '5%',
        marginTop: 0,
        marginBottom: 30,
    },
    listItem: {
        marginLeft: 0,
        marginRight: 0,
        borderColor: '#000',
        marginTop: 5,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
        elevation: 3,
    },
});
