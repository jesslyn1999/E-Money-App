import React from 'react';
import {Container, Content, List, View} from 'native-base';
import TransactionCard from 'src/component/transaction/TransactionCard';
import {StyleSheet} from 'react-native';

export default function TransactionHistory() {
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
            <Content>
                <View style={styles.contentContainer}>
                    <List>
                        {transactionDatum.map((item, index) => (
                            <TransactionCard
                                key={'transaction-' + index}
                                data={item}
                            />
                        ))}
                    </List>
                </View>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginHorizontal: '5%',
        marginTop: 10,
        marginBottom: 10,
    },
});
