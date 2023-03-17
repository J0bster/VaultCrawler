import {CombatIntro, getNextEntity, doTurn} from '../src/combat';
import {createWorld, createEntity, addComponent} from '../src/enitity';
import {expect, test, describe, assertType} from 'vitest';

describe ('Combat', () => {
    test('CombatIntro', () => {
        const world = createWorld();
        const entity = 1;
        const component = {
            dexterity: 10,
            health: 10
        };
        createEntity(world, entity, component, 'STATS');
        const entity2 = 2;
        const component2 = {
            dexterity: 5,
            health: 10
        };
        createEntity(world, entity2, component2, 'STATS');
        const combat = {
            combatants: world.entities,
            combatState: {
                priorityByEntity: {}
            }
        };
        CombatIntro(combat);
        expect(combat.combatState.priorityByEntity).toEqual({1: 10, 2: 5});
    })
    test('getNextEntity', () => {
        const world = createWorld();
        const entity = 1;
        const component = {
            dexterity: 10,
            health: 10
        };
        createEntity(world, entity, component, 'STATS');
        const entity2 = 2;
        const component2 = {
            dexterity: 5,
            health: 10
        };
        createEntity(world, entity2, component2, 'STATS');
        const combat = {
            combatants: world.entities,
            combatState: {
                priorityByEntity: {}
            }
        };
        CombatIntro(combat);
        expect(getNextEntity(combat)).toBe(1);
    })
    test('doTurn', () => {
        const world = createWorld();
        const entity = 1;
        const component = {
            dexterity: 10,
            health: 10
        };
        createEntity(world, entity, component, 'STATS');
        const entity2 = 2;
        const component2 = {
            dexterity: 5,
            health: 10
        };
        createEntity(world, entity2, component2, 'STATS');
        const combat = {
            combatants: world.entities,
            combatState: {
                priorityByEntity: {}
            }
        };
        CombatIntro(combat);
        doTurn(1, combat);
        expect(combat.combatState.priorityByEntity).toEqual({1: 9, 2: 5});
    })
})