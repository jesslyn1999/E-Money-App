import React, {useState} from 'react';
import {Item, Label, NativeBase, Textarea} from 'native-base';
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
} from 'react-native';

const ORANGE = 'rgba(230, 126, 7, 1)';
const LIGHT_YELLOW = 'rgba(255, 191, 0, 1)';

type CustomTextAreaProps = NativeBase.Textarea &
    NativeBase.Input & {
        label?: string;
    };

export default function CustomTextArea(props: CustomTextAreaProps) {
    const {onFocus, onBlur, label, ...otherProps} = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = (
        event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
        setIsFocused(true);
        if (onFocus) {
            onFocus(event);
        }
    };

    const handleBlur = (
        event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
        setIsFocused(false);
        if (onBlur) {
            onBlur(event);
        }
    };

    return (
        <Item stackedLabel style={styles.itemView}>
            {!!label && <Label>{label}</Label>}
            <Textarea
                placeholder="Textarea"
                style={
                    isFocused
                        ? {...styles.textArea, ...styles.textAreaFocus}
                        : styles.textArea
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...otherProps}
            />
        </Item>
    );
}

const styles = StyleSheet.create({
    itemView: {
        borderBottomWidth: 0,
        marginVertical: 8,
        marginRight: 16,
    },
    textArea: {
        marginTop: 15,
        marginBottom: 15,
        width: '100%',
        borderColor: LIGHT_YELLOW,
    },
    textAreaFocus: {
        borderColor: ORANGE,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
});
