import React, {ReactNode} from 'react';
import {Card, CardItem, Body} from 'native-base';
import PropTypes from 'prop-types';

interface CardObjectProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

export default function CustomCard(props: any) {
    const {
        key,
        cardObject,
    }: {key: string | number; cardObject: CardObjectProps} = props;

    return (
        <Card key={key} {...props}>
            {!!cardObject.header && (
                <CardItem header>{cardObject.header}</CardItem>
            )}
            {!!cardObject.body && (
                <CardItem>
                    <Body>{cardObject.body}</Body>
                </CardItem>
            )}
            {!!cardObject.footer && (
                <CardItem footer>{cardObject.footer}</CardItem>
            )}
        </Card>
    );
}

CustomCard.propTypes = {
    key: PropTypes.string || PropTypes.number,
    cardObject: PropTypes.any.isRequired,
};
