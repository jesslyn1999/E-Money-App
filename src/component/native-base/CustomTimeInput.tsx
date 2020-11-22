import React, {useEffect, useState} from 'react';
import {Button, Icon} from 'native-base';
import {Alert, StyleSheet} from 'react-native';
import moment from 'moment';
import CustomInput, {
    CustomInputProps,
} from 'src/component/native-base/CustomInput';
import RNDateTimePicker from '@react-native-community/datetimepicker';

type CustomTimeInputProps = CustomInputProps & {
    formatDate?: string;
    label?: string;
};

export default function CustomTimeInput(props: CustomTimeInputProps) {
    const {formatDate, value, onChangeText, label, ...otherProps} = props;
    const [inputData, setInputData] = useState({
        inputText: value || '',
        error: false,
        isTimePicker: false,
    });

    const handleChangeTime = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || new Date();
        const inputText = moment(selectedDate).format(formatDate);
        setInputData({
            ...inputData,
            inputText: inputText,
            isTimePicker: false,
        });
        console.log('INPUT TEXT: ', inputText);
        console.log('current: ', currentDate);
        if (onChangeText) {
            onChangeText(inputText);
        }
    };

    const createButtonAlert = () =>
        Alert.alert('', 'Time format: 00.00-23.59', [{text: 'OK'}], {
            cancelable: false,
        });

    useEffect(() => {
        moment.locale('id');
    }, []);

    return (
        <>
            <CustomInput
                label={label}
                inlineLabel
                value={value || inputData.inputText}
                error={inputData.error}
                timeStyle={styles.timeStyle}
                left={() => (
                    <Icon
                        name="ios-alarm"
                        type="Ionicons"
                        style={styles.iconLabel}
                    />
                )}
                right={() => (
                    <Button
                        small
                        danger={inputData.error}
                        dark={!inputData.error}
                        transparent
                        onPress={createButtonAlert}>
                        <Icon name="exclamationcircleo" type="AntDesign" />
                    </Button>
                )}
                onTouchStart={() =>
                    setInputData({...inputData, isTimePicker: true})
                }
                {...otherProps}
            />
            {inputData.isTimePicker && (
                <RNDateTimePicker
                    testID="timePicker"
                    mode="time"
                    value={new Date()}
                    onChange={handleChangeTime}
                    display="default"
                    is24Hour={true}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    timeStyle: {
        width: '30%',
    },
    iconLabel: {
        fontSize: 35,
    },
});
