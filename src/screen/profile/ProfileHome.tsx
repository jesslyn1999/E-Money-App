import React from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    View,
    Body,
    Button,
} from 'native-base';
import {StyleSheet, Image} from 'react-native';

export default function ProfileHome() {
    return (
        <Container>
            <Content>
                <Card style={styles.cardContainer}>
                    <CardItem style={styles.cardItem}>
                        <Body style={styles.cardImage}>
                            <View style={styles.viewAvatarImage}>
                                <Image
                                    source={{
                                        uri:
                                            'https://randomuser.me/api/portraits/men/3.jpg',
                                    }}
                                    style={styles.avatarImage}
                                />
                            </View>
                            <Text>Your Name</Text>
                            <Text>08xxxx</Text>
                        </Body>
                    </CardItem>
                </Card>
                <View style={styles.buttonView}>
                    <Button block primary style={styles.marginVertical}>
                        <Text>Ubah Profil</Text>
                    </Button>
                    <Button block primary style={styles.marginVertical}>
                        <Text>Ganti Password</Text>
                    </Button>
                    <Button block primary style={styles.marginVertical}>
                        <Text>LOG OUT</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        flex: 1,
        marginHorizontal: '10%',
    },
    marginVertical: {
        marginVertical: 10,
    },
    cardContainer: {
        marginBottom: 30,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
    },
    cardItem: {
        backgroundColor: 'rgba(192, 18, 26, 1)',
    },
    cardImage: {
        alignItems: 'center',
    },
    viewAvatarImage: {
        width: 200,
        height: 200,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderColor: 'rgba(205, 194, 193, 1)',
        borderWidth: 5,
        borderRadius: 500,
    },
});
