import {Dispatch} from 'react';
import {ActionProps} from 'src/context/store';
import {BACKEND_API_URL, getAxiosInstance} from 'src/api';
import {UserDataProps} from 'src/interface';

export const logInUser = (
    dispatch: Dispatch<ActionProps>,
    authToken: string,
    user: UserDataProps,
) => {
    dispatch({
        type: 'LOG_IN',
        payload: {
            authToken: authToken,
            user: user,
        },
    });
};

export const logOutUser = (dispatch: Dispatch<ActionProps>) => {
    dispatch({
        type: 'LOG_OUT',
    });
};

export const setAxiosBEInstance = (
    dispatch: Dispatch<ActionProps>,
    authToken: string,
) => {
    const axiosInstance = getAxiosInstance(BACKEND_API_URL, authToken);
    dispatch({
        type: 'AXIOS_BE_INSTANCE',
        payload: {
            axios: axiosInstance,
        },
    });
};

export const setLoadingPage = (
    dispatch: Dispatch<ActionProps>,
    reload: boolean,
) => {
    dispatch({
        type: 'SET_LOADING',
        payload: {
            reload: reload,
        },
    });
};
