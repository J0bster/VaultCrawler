import {expect, test, describe, assertType} from 'vitest';
import {createEntity, createWorld, addComponent} from '../src/enitity';

describe ('Entity', () => {
    test('createWorld', () => {
        const world = createWorld();
        expect(world.entities).toEqual(new Map());
    })
    test('createEntity', () => {
        const world = createWorld();
        const entity = 1;
        const component = {
            data: {
                dexterity: 10,
                health: 10
            }
        };
        createEntity(world, entity, component, 'STATS');
        // expect(world.entities.get(entity)).toEqual(new Map([['STATS', component]]));
        expect(world.entities.get(entity)).toEqual(new Map([['STATS', component]]));
    })
    test('addComponent', () => {
        const world = createWorld();
        const entity = 1;
        const component = {
            data: {
                dexterity: 10,
                health: 10
            }
        };
        createEntity(world, entity, component, 'STATS');
        const component2 = {
            data: {
                dexterity: 10,
                health: 10
            }
        };
        addComponent(world, entity, component2, 'NAME');
        expect(world.entities.get(entity)).toEqual(new Map([['STATS', component], ['NAME', component2]]));
    })
})