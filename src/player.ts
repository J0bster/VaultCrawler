export type PlayerData = {
    hp: number;
    mp: number;
    atk: number;
    def: number;
    spd: number;
}

export type Player = {
    id: number;
    name: string;
    data: PlayerData;
    skills: string[];
}