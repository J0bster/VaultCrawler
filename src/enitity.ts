export type Entity = number;

export type componentType = "Player"|"HEALTH" | "NAME"| "STATS";

export type PlayerComponent = {
    id: number;
}

export type HealthComponent = number;

export type NameComponent = string;

export type StatsComponent = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type world = {
    entities: Map<Entity, Map<componentType, PlayerComponent | HealthComponent | NameComponent | StatsComponent>>;
}