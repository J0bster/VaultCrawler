export type EnemyData = {
    hp: number;
    mp: number;
    atk: number;
    def: number;
    spd: number;
}

export type Enemy = {
    id: number;
    name: string;
    data: EnemyData;
    skills: string[];
}