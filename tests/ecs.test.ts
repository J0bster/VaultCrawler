import {expect, test, describe, assertType} from 'vitest';
import {createEntity, CreateComponent, CreateWorld} from '../src/enitity';

describe ('Entity', () => {
    test('createEntity', () => {
        const world = CreateWorld();
        const entity = 1;
        const component = CreateComponent('NAME', {
            name: 'Bob'
        });
        createEntity(world, entity, component);
        // expect(world.entities.get(entity)).toEqual([component]);
        expect(world.entities.get(entity)).toEqual([{type: 'NAME', data: {name: 'Bob'}}]);
    })
})