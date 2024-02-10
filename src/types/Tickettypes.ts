interface Details {
    id: number;
    dayofweek: string;
    dayofmonth: string;
    yearmonth: string;
}

export interface LocationData {
    title: string;
    details: Details[];
}