import axios, {AxiosInstance} from 'axios';
import {UserDataProps, LoginDataProps, IBackendResponse} from 'src/interface';
import {BACKEND_API_URL} from 'src/api';

export const loginCoachUser = (
    loginData: LoginDataProps,
): Promise<{user: UserDataProps} & {authToken: string}> =>
    new Promise((resolve, reject) => {
        console.log('Login with BACKEND base url: ', BACKEND_API_URL);
        axios({
            method: 'post',
            baseURL: BACKEND_API_URL,
            url: '/coach/Login',
            withCredentials: true,
            data: loginData,
        })
            .then(
                ({
                    data: {kode, pesan, result},
                }: {
                    data: IBackendResponse & {
                        result: UserDataProps;
                    };
                }) => {
                    if (!result || kode === 0) {
                        throw new Error(pesan || '');
                    }
                    resolve({
                        user: result,
                        authToken: pesan || '',
                    });
                },
            )
            .catch(reject);
    });

//TODO: BACKEND API?
export const loginCoachUserByJwt = (
    axiosInstance: AxiosInstance,
): Promise<{user: UserDataProps}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: '/user/showAllQuest',
            })
            .then(
                ({
                    data: {result, status},
                }: {
                    data: {
                        result?: {id_user: number}[];
                        status?: string;
                    } & IBackendResponse;
                }) => {
                    if (!result || status) {
                        throw new Error(status);
                    }
                    getUserProfile(axiosInstance, result[0].id_user)
                        .then(resolve)
                        .catch(reject);
                },
            )
            .catch(reject);
    });

const getUserProfile = (
    axiosInstance: AxiosInstance,
    userId: number,
): Promise<{user: UserDataProps}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: `/Pro/ShowDetailPlayer/${userId}`,
            })
            .then(({data: {result}}: {data: {result: UserDataProps}}) =>
                resolve({user: result}),
            )
            .catch(reject);
    });
