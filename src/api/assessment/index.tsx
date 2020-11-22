import axios, {AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {IBackendResponse, SparringRoomDataProps} from 'src/interface';
import {BACKEND_API_URL} from 'src/api';
import {AssessmentDataProps} from 'src/interface';

export const getTeamAssessmentList = (
    team_id: number = -1,
): Promise<AssessmentDataProps[]> =>
    new Promise((resolve, reject) => {
        AsyncStorage.getItem('auth_token').then((token) => {
            axios({
                method: 'get',
                headers: {Authorization: 'Bearer ' + token},
                baseURL: BACKEND_API_URL,
                url: `/Assessment/ShowAllAssessment/${team_id}`,
                withCredentials: true,
            })
                .then(({data}: {data: {result: AssessmentDataProps[]}}) => {
                    resolve(data.result);
                })
                .catch(reject);
        });
    });

export const addNewAssessment = (assessmentData: AssessmentDataProps) =>
    new Promise((resolve, reject) => {
        axios({
            method: 'post',
            baseURL: BACKEND_API_URL,
            url: '/Assessment/AddAssessment',
            withCredentials: true,
            data: assessmentData,
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log('error: ', err.stack);
                reject(err);
            });
    });

// ~~~~~~~~~~~~~~~~~~~~~ POST
export const createSparringRoom = (
    axiosInstance: AxiosInstance,
    sparringRoomData: SparringRoomDataProps,
): Promise<{message: string}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'post',
                url: '/SquadManagement/CreateRoom',
                data: sparringRoomData,
            })
            .then(({data: {pesan}}: {data: IBackendResponse}) =>
                resolve({message: pesan || ''}),
            )
            .catch(reject);
    });
