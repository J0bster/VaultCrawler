type CombatState = {
    priorityByEntity: Record<number, number>;
};

type Combat = {
    combatants: Map<number, Map<string, any>>;
    combatState: CombatState;
};

export function CombatIntro(combat: Combat) {
    const { priorityByEntity } = combat.combatState;
    combat.combatants.forEach((value, key) => {
        priorityByEntity[key] = combat.combatants.get(key)?.get('STATS')?.dexterity;
    });
}


export function getNextEntity(combat: Combat) {
    const { priorityByEntity } = combat.combatState;
    const entities = Array.from(combat.combatants.keys());
    const entity = entities.reduce((acc, cur) => {
        if (priorityByEntity[cur] > priorityByEntity[acc]) {
            return cur;
        }
        return acc;
    }, entities[0]);
    return entity;
}

export function doTurn(entity: number, combat: Combat) {
    const { priorityByEntity } = combat.combatState;
    priorityByEntity[entity] -= 1;

    // reset priority if it reaches 0
    if (priorityByEntity[entity] === 0) {
        priorityByEntity[entity] = combat.combatants.get(entity)?.get('STATS')?.dexterity;
    }
}

export function attack(attacker: number, defender: number, combat: Combat) {
    const attackerStats = combat.combatants.get(attacker)?.get('STATS');
    const defenderStats = combat.combatants.get(defender)?.get('STATS');
    defenderStats.health -= attackerStats.strength;
}


export function selectTarget(combat: Combat, entity: number) {
    const entities = Array.from(combat.combatants.keys());
    const target = entities.reduce((acc, cur) => {
        if (cur !== entity) {
            return cur;
        }
        return acc;
    }, entities[0]);
    return target;
}

export function removeDead(combat: Combat) {
    const entities = Array.from(combat.combatants.keys());
    entities.forEach((entity) => {
        if (combat.combatants.get(entity)?.get('STATS')?.health <= 0) {
            combat.combatants.delete(entity);
        }
    });
}

export function isCombatOver(combat: Combat) {
    return combat.combatants.size === 1;
}