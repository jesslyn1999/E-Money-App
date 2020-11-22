import React, {useState} from 'react';
import {
    Button,
    Icon,
    Input,
    Item,
    Label,
    NativeBase,
    RnTextStyleProp,
} from 'native-base';
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
} from 'react-native';

const ORANGE = 'rgba(230, 126, 7, 1)';
const LIGHT_YELLOW = 'rgba(255, 191, 0, 1)';
const RED = 'rgba(255, 0, 0, 1)';

export type CustomInputProps = NativeBase.Input &
    NativeBase.Item & {
        enableErase?: boolean;
        error?: boolean;
        prefix?: string;
        timeStyle?: RnTextStyleProp;
        label?: string;
        left?: any;
        right?: any;
        isNoInput?: boolean;
    };

export default function CustomInput(props: CustomInputProps) {
    const {
        onFocus,
        onBlur,
        onChangeText,
        value,
        enableErase,
        error,
        label,
        timeStyle,
        placeholder,
        prefix,
        keyboardType,
        placeholderTextColor,
        fixedLabel,
        floatingLabel,
        inlineLabel,
        stackedLabel,
        style,
        left,
        right,
        isNoInput,
        ...otherProps
    } = props;

    const [inputText, setInputText] = useState<string>(value || '');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChangeText = (text: string) => {
        let replaceText = text.replace(prefix || '', '');
        if (keyboardType === 'numeric') {
            if (replaceText && !/^\d+$/.test(replaceText)) {
                return;
            }
        }
        setInputText(replaceText);
        if (onChangeText) {
            onChangeText(replaceText);
        }
    };

    const handleCloseButton = () => {
        handleChangeText('');
    };

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

    const errorStyle = error ? {...styles.inputErrorView} : {};

    const timeInputStyle = timeStyle ? timeStyle : {};

    const itemStyle = isFocused
        ? {...styles.inputView, ...styles.inputViewFocused}
        : styles.inputView;

    return (
        <Item
            style={[styles.itemView, style]}
            fixedLabel={fixedLabel}
            floatingLabel={floatingLabel}
            inlineLabel={inlineLabel}
            stackedLabel={stackedLabel}>
            {!!left && left()}
            {!!label && <Label>{label}</Label>}
            {!isNoInput && (
                <Item style={[{...itemStyle, ...errorStyle}, timeInputStyle]}>
                    <Input
                        value={(prefix || '').concat(value || inputText)}
                        blurOnSubmit
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleChangeText}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        {...otherProps}
                    />
                    {enableErase && !!inputText && (
                        <Button
                            warning
                            transparent
                            onPress={() => handleCloseButton()}>
                            <Icon name="close" />
                        </Button>
                    )}
                </Item>
            )}
            {!!right && right()}
        </Item>
    );
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: LIGHT_YELLOW,
        height: 40,
    },
    inputErrorView: {
        borderBottomColor: RED,
    },
    inputViewFocused: {
        borderBottomColor: ORANGE,
        borderBottomWidth: 2,
    },
    itemView: {
        borderBottomWidth: 0,
        marginVertical: 8,
        marginRight: 16,
    },
});
