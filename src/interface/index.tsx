export interface tabProps {
    name: string;
    content: contentProps[];
}

export interface contentProps {
    id: number;
    name: string;
    date: string;
}

export interface IBackendResponse {
    kode: 0 | 1;
    pesan?: string | null;
}

export interface LoginDataProps {
    username: string;
    password: string;
}

export interface SparringRoomDataProps {
    id_head?: number;
    id_team?: number;
    type_room?: 0 | 1; //public or private
    name: string;
    description: string;
    harga?: number;
    times: string; // 2020-01-01 08:00:00
    end_times: string; // 2020-01-01 10:00:00
    location?: string;
    location_detail?: string;
    x?: number; // lat cordinate in gmaps
    y?: number; // lng cordinate in gmaps
    city?: string; // city of location
    nomor: string; // contact person (whatsapp)
    // ~~~~~~~~~~~~~~~~~~~~~ HELPER
    date?: Date;
}

export interface TeamDataProps {
    id: number;
    name: string;
    description?: string;
    picture?: string;
    type_formation?: number;
    id_head?: number;
    level?: number;
    exp?: number;
    point?: number;
    play?: number;
    goal?: number;
    Website?: string;
    Address?: string;
    win?: number;
    lose?: number;
    draw?: number;
    match_total?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    dummy?: number;
    stadium?: string;
}

export interface AssessmentDataProps {
    id: number;
    team_id: number;
    assessment_name?: string;
    assessment_type?: string;
    description?: string;
    assessment_date?: string;
    start_assessment?: string;
    end_assessment?: string;
    deleted_at?: string;
}

// TODO : type?
export interface UserDataProps {
    id: number;
    username: string;
    full_name: string;
    email: string;
    password: string;
    team_id: number;
    status?: string;
    nameset?: string;
    status_email?: number;
    email_verifyat?: string;
    token?: string;
    profile_pic?: string;
    point?: number;
    vote?: number;
    vote_total?: number;
    exp?: number;
    coin?: number;
    level?: number;
    role?: string;
    positions?: string;
    foot?: string;
    noJersey?: number;
    id_country?: number;
    id_badge?: number;
    id_playercard?: string;
    favorite_club?: string;
    DOB?: string;
    height?: number;
    weight?: number;
    defend?: number;
    passing?: number;
    speed?: number;
    physical?: number;
    shoot?: number;
    dribble?: number;
    play?: number;
    goal?: number;
    assist?: number;
    yellow?: number;
    red?: number;
    win?: number;
    lose?: number;
    draw?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    dummy?: number;
    heart_rate?: number;
    length_of_sleep?: number;
    quality_of_sleep?: string;
    tiredness_sensation?: string;
    training_willingness?: string;
    appetite?: string;
    competition_willingness?: string;
}

export interface TransactionDataProps {
    id: number;
    amount: string;
    recipient: string;
    date: string;
}
