import axios from 'axios';
import {LoginDataProps, IBackendResponse, UserDataProps} from 'src/interface';
import {BACKEND_API_URL} from 'src/api';

const COLLECTION = 'user';

interface IInjectedResponse extends IBackendResponse {
    result?: UserDataProps;
}

export const registerCoachUser = (loginData: LoginDataProps) =>
    new Promise((resolve, reject) => {
        axios({
            method: 'post',
            baseURL: BACKEND_API_URL,
            url: `/${COLLECTION}/RegisterUser`,
            withCredentials: true,
            data: loginData,
        })
            .then(resolve)
            .catch(reject);
    });
