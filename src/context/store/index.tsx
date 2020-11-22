import {AxiosInstance} from 'axios';
import React, {createContext, Dispatch, ReactNode, useReducer} from 'react';
import {UserDataProps} from 'src/interface';

export interface StoredStateProps {
    authToken: string | null;
    user: UserDataProps | null;
    axios: AxiosInstance | null;
    isLoading: boolean;
}

export type ActionProps =
    | {type: 'LOG_IN'; payload: {user: UserDataProps; authToken: string}}
    | {type: 'LOG_OUT'}
    | {type: 'AXIOS_BE_INSTANCE'; payload: {axios: AxiosInstance}}
    | {type: 'SET_LOADING'; payload: {reload: boolean}};

const initialState: StoredStateProps = {
    authToken: null,
    user: null,
    axios: null,
    isLoading: false,
};

const StateContext = createContext<StoredStateProps>(initialState);
const DispatchContext = createContext<Dispatch<ActionProps>>(
    {} as Dispatch<ActionProps>,
);

const StateProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

function reducer(
    state: StoredStateProps,
    action: ActionProps,
): StoredStateProps {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                authToken: action.payload.authToken,
                user: action.payload.user,
            };
        case 'LOG_OUT':
            return {...state, authToken: null, user: null};
        case 'AXIOS_BE_INSTANCE':
            return {...state, axios: action.payload.axios};
        case 'SET_LOADING':
            return {...state, isLoading: action.payload.reload};
        default:
            return {...state};
    }
}

export {StateProvider, StateContext, DispatchContext};
