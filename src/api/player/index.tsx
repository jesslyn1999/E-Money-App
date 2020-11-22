import {AxiosInstance} from 'axios';
import {
    TeamDataProps,
    AssessmentDataProps,
    UserDataProps,
    IBackendResponse,
} from 'src/interface';

const COLLECTION = 'SquadManagement';

// ~~~~~~~~~~~~~~~~~~~~~ GET
export const getTeamListByUserId = (
    axiosInstance: AxiosInstance,
    userId: number,
): Promise<TeamDataProps[]> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: `/${COLLECTION}/ShowListJoinedTeam/${userId}`,
            })
            .then(
                ({
                    data: {result},
                }: {
                    data: {
                        current?: {id: number}[];
                        result?: TeamDataProps[];
                    } & IBackendResponse;
                }) => resolve(result),
            )
            .catch(reject);
    });

export const getTeamMembersByTeamId = (
    axiosInstance: AxiosInstance,
    teamId: number,
): Promise<{members: UserDataProps[]; pendingMembers: UserDataProps[]}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: `/Assessment/DetailedMember/${teamId}`,
            })
            .then(
                ({
                    data: {
                        result: {members, pending_members},
                    },
                }: {
                    data: {
                        result: {
                            members?: UserDataProps[];
                            pending_members?: UserDataProps[];
                        };
                    };
                }) => {
                    resolve({
                        members: members || [],
                        pendingMembers: pending_members || [],
                    });
                },
            )
            .catch(reject);
    });

export const getProfileAssessment = (
    axiosInstance: AxiosInstance,
    playerId: number = 2,
    teamId: number = 93,
): Promise<{user: UserDataProps; assessments: AssessmentDataProps[]}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: `/Assessment/ShowIndivPlayerAssessment/${playerId}/${teamId}`,
            })
            .then(
                ({
                    data: {
                        result: {player_detail, assessments},
                    },
                }: {
                    data: {
                        result: {
                            player_detail: UserDataProps[];
                            assessments: AssessmentDataProps[];
                        };
                    };
                }) =>
                    resolve({user: player_detail[0], assessments: assessments}),
            )
            .catch(reject);
    });

export const getAddPlayersByTeamId = (
    axiosInstance: AxiosInstance,
    teamId: number,
    query: string = '', // TODO: get ALL
): Promise<{users: UserDataProps[]}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'get',
                url: `/Assessment/GetAvailablePlayers/${teamId}`,
                params: {name: query},
            })
            .then(
                ({
                    data: {pesan},
                }: {
                    data: {
                        pesan: UserDataProps[];
                    };
                }) => {
                    resolve({
                        users: pesan,
                    });
                },
            )
            .catch(reject);
    });

// ~~~~~~~~~~~~~~~~~~~~~ POST
export const invitePlayer = (
    axiosInstance: AxiosInstance,
    userId: number,
    teamId: number,
    coachId: number,
): Promise<{message: string}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'post',
                url: '/Assessment/AddPlayer',
                data: {
                    id_user: userId,
                    id_team: teamId,
                    id_coach: coachId,
                },
            })
            .then(({data: {pesan}}: {data: IBackendResponse}) =>
                resolve({message: pesan || ''}),
            )
            .catch(reject);
    });

export const cancelInvitePlayer = (
    axiosInstance: AxiosInstance,
    userId: number,
    teamId: number,
): Promise<{message: string}> =>
    new Promise((resolve, reject) => {
        axiosInstance
            .request({
                method: 'post',
                url: '/Assessment/CancelInvitation',
                data: {
                    team_id: teamId,
                    player_id: userId,
                },
            })
            .then(({data: {pesan}}: {data: IBackendResponse}) => {
                console.log('YEY: ', pesan);
                resolve({message: pesan || ''});
            })
            .catch(reject);
    });

// ~~~~~~~~~~~~~~~~~~~~~ DELETE
export const deleteTeamPlayer = (
    axiosInstance: AxiosInstance,
    userId: number,
    teamId: number,
    coachId: number,
): Promise<{message: string}> =>
    new Promise((resolve, reject) => {
        console.log('DELETE: ', userId, teamId, coachId);
        axiosInstance
            .request({
                method: 'delete',
                url: '/Assessment/RemovePlayer',
                data: {
                    id_user: userId,
                    id_admin: coachId,
                    id_team: teamId,
                },
            })
            .then(({data: {pesan}}: {data: IBackendResponse}) => {
                console.log('RESP: ', pesan);
                resolve({message: pesan || ''});
            })
            .catch(reject);
    });
