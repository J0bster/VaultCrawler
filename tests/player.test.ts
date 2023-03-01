import {expect, test, describe} from 'vitest';
import { createPlayer } from '../src/player';


describe('Player', () => {
    test('createPlayer and match player', () => {
        const player = createPlayer({
            hp: 100,
            mp: 100,
            atk: 100,
            def: 100,
            spd: 100,
            name: 'test',
            skills: [],
            items: [],
        });
        expect(player).toEqual({
            hp: 100,
            mp: 100,
            atk: 100,
            def: 100,
            spd: 100,
            name: 'test',
            skills: [],
            items: [],
        });
    });
});
// test('createPlayer', () => {
//     const player = createPlayer({
//         hp: 100,
//         mp: 100,
//         atk: 100,
//         def: 100,
//         spd: 100,
//         name: 'test',
//         skills: [],
//         items: [],
//     });
//     expect(player).toEqual({
//         hp: 100,
//         mp: 100,
//         atk: 100,
//         def: 100,
//         spd: 100,
//         name: 'test',
//         skills: [],
//         items: [],
//     });
// });