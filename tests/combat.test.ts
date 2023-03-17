// import {CombatIntro, getNextEntity, doTurn} from '../src/combat';
// import {createWorld, createComponent, createEntity, addComponent} from '../src/enitity';
// import {expect, test, describe, assertType} from 'vitest';

// describe ('Combat', () => {
//     test('CombatIntro', () => {
//         const world = createWorld();
//         const entity = 1;
//         const component = createComponent('STATS', {
//             dexterity: 10
//         });
//         createEntity(world, entity, component);
//         const combat = {
//             combatants: world.entities,
//             combatState: {
//                 priorityByEntity: {}
//             }
//         };
//         CombatIntro(combat);
//         expect(combat.combatState.priorityByEntity[entity]).toEqual(10);
//     })
//     test('getNextEntity', () => {
//         const world = createWorld();
//         const entity = 1;
//         const component = createComponent('STATS', {
//             dexterity: 10
//         });
//         createEntity(world, entity, component);
//         const combat = {
//             combatants: world.entities,
//             combatState: {
//                 priorityByEntity: {}
//             }
//         };
//         CombatIntro(combat);
//         expect(getNextEntity(combat)).toEqual(1);
//     })
//     test('doTurn', () => {
//         const world = createWorld();
//         const entity = 1;
//         const component = createComponent('STATS', {
//             dexterity: 10
//         });
//         createEntity(world, entity, component);
//         const combat = {
//             combatants: world.entities,
//             combatState: {
//                 priorityByEntity: {}
//             }
//         };
//         CombatIntro(combat);
//         doTurn(entity, combat);
//         expect(combat.combatState.priorityByEntity[entity]).toEqual(9);
//     })
// })