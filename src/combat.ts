import { world } from './enitity';

type CombatState = {
    priorityByEntity: Record<number, number>;
};

type Combatants = world['entities'];

export function getNextEntity(combatants: Combatants, combatState: CombatState) {
    const { priorityByEntity } = combatState;
    const entities = Array.from(combatants.keys());
    const entity = entities.reduce((acc, cur) => {
        if (priorityByEntity[cur] > priorityByEntity[acc]) {
            return cur;
        }
        return acc;
    }, entities[0]);
    return entity;
}

export function CombatIntro(combatants: Combatants, combatState: CombatState) {
    const { priorityByEntity } = combatState;
    combatants.forEach((value, key) => {
        // priorityByEntity[key] = combatants[key].get('STATS')?.dexterity;
        // Q: How do I get the dexterity value from the STATS component?
        //A: You need to use the get method on the Map object. The get method returns the value associated with the key.
        priorityByEntity[key] = combatants.get(key)?.get('STATS')?.dexterity;

    });
}

export function doTurn(entity: number, combatants: Combatants, combatState: CombatState) {
    const { priorityByEntity } = combatState;
    priorityByEntity[entity] -= 1;
    if (priorityByEntity[entity] <= 0) {
        priorityByEntity[entity] = combatants[entity].get('STATS')?.dexterity;
    }

}

