import {expect, test, describe, assertType} from 'vitest';
import {world} from '../src/enitity';
import {doTurn, getNextEntity, CombatIntro} from '../src/combat';

describe ('Combat', () => {
    test('CombatIntro', () => {
        const combatants = new Map();
        const combatState = {
            priorityByEntity: {}
        };
        const entity = 1;
        const component = {
            id: 1
        }
        const health = 100;
        const name = 'Bob';
        const stats = {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        }
        combatants.set(entity, component);
        combatants.set(entity, health);
        combatants.set(entity, name);
        combatants.set(entity, stats);
        CombatIntro(combatants, combatState);
        expect(combatState.priorityByEntity[entity]).toEqual(10);
    })
})
