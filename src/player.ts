import { Item } from './items';

export type Player = {
    hp: number;
    mp: number;
    atk: number;
    def: number;
    spd: number;
    name: string;
    skills: string[];
    items: Item[];
}

export function createPlayer(player: Player): Player {
    return player;
}

// export function addItem(player: Player, item: Item, amount: number) {
//     const inInventory = player.items.find(i => i.name === item.name);
//     if (inInventory) {
//         const newQuantity = inInventory.quantity + amount;
//         if (newQuantity > inInventory.maxQuantity) {
//             inInventory.quantity = inInventory.maxQuantity;
//         }
//         else {
//             inInventory.quantity = newQuantity;
//         }
//     }
//     else {
//         player.items.push(item);
//         inInventory.quantity = amount;
//     }
// }