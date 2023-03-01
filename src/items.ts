export type Item = {
    name: string;
    description: string;
    type: string;
    effect?: string;
    damage?: number;
    rarity: string;
    quantity?: number;
    maxQuantity: number;
}

export function createItem(item: Item): Item {
    return item;
}