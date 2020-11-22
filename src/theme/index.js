import getTheme from 'src/theme/native-base-theme/components';
import textTheme from 'src/theme/native-base-theme/components/Text';
import contentTheme from 'src/theme/native-base-theme/components/Content';
import customVariable from './customVariable';

const theme = () => {
    const nbTheme = getTheme(customVariable);
    const overrides = {
        'NativeBase.Text': {
            ...textTheme(),
        },
        'NativeBase.Content': {
            ...contentTheme(),
        },
    };
    return {...nbTheme, ...overrides};
};

export default theme;
