import React from 'react';
import {Body, Card, CardItem, Icon, Left, Right, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {TransactionDataProps} from 'src/interface';

interface InjectedProps {
    data: TransactionDataProps;
}

export default function TransactionCard(props: InjectedProps) {
    const {data} = props;
    return (
        <Card style={styles.cardView}>
            <CardItem>
                <Left>
                    <Icon name="person" type="MaterialIcons" />
                    <Body>
                        <Text adjustsFontSizeToFit numberOfLines={1}>
                            Rp. {data.amount}
                        </Text>
                        <Text adjustsFontSizeToFit numberOfLines={2}>
                            Transfer ke {data.recipient}
                        </Text>
                    </Body>
                </Left>
                <Right style={styles.flexStart}>
                    <Text adjustsFontSizeToFit numberOfLines={1}>
                        {data.date}
                    </Text>
                </Right>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardView: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5,
        marginBottom: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
        elevation: 3,
    },
    flexStart: {
        alignSelf: 'flex-start',
    },
});
