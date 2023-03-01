import {expect, test, describe} from 'vitest';
import { Item, createItem } from '../src/items';
import items from '../data/items.json';

describe('Item', () => {
    test('createItem', () => {
        const sword = createItem(items.find(item => item.name === 'Sword-Common-1'));

        expect(sword).toEqual({
            "name": "Rusty Sword",
            "type": "Weapon",
            "damage": 10,
            "rarity": "Common",
            "maxQuantity": 1
        });
    })
})