import {expect, test, describe, assertType} from 'vitest';
import {world} from '../src/enitity';



describe ('Entity', () => {
    test('createEntity', () => {
        const entity = 1;
        const component = {
            id: 1
        }
        type earth = world;
        let planet = new Map();
        planet = earth.entities;
        world.set(entity, component);
        expect(world).toEqual(new Map([[1, {id: 1}]]));
    })
    test('createEntity with health', () => {
        const entity = 1;
        const component = {
            id: 1
        }
        const health = 100;
        const world = new Map();
        world.set(entity, component);
        world.set(entity, health);
        // expect(world.get(entity)).toEqual(100);
        expect(world.entities.get('HEALTH')).toEqual(100);
    })
})