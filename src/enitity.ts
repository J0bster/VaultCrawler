type Entity = number;

export type componentType = "NAME" | "STATS";

type component = {
    type: componentType;
    data: any;
}

export type world = {
    entities: Map<Entity, component[]>;
}

export function CreateWorld() {
    return {
        entities: new Map()
    };
}

export function CreateComponent(type: componentType, data: any) {
    return {
        type,
        data
    };
}

export function createEntity(world: world, entity: Entity, component: component) {
    world.entities.set(entity, [component]);
}

export function addComponent(world: world, entity: Entity, component: component) {
    const components = world.entities.get(entity);
    if (components) {
        components.push(component);
    }
}

export function getComponent(world: world, entity: Entity, componentType: componentType) {
    const components = world.entities.get(entity);
    if (components) {
        return components.find(component => component.type === componentType);
    }
}

export function removeComponent(world: world, entity: Entity, componentType: componentType) {
    const components = world.entities.get(entity);
    if (components) {
        const index = components.findIndex(component => component.type === componentType);
        if (index !== -1) {
            components.splice(index, 1);
        }
    }
}

export function removeEntity(world: world, entity: Entity) {
    world.entities.delete(entity);
}

export function getEntities(world: world) {
    return Array.from(world.entities.keys());
}

export function getEntitiesWithComponent(world: world, componentType: componentType) {
    return Array.from(world.entities.keys()).filter(entity => {
        const components = world.entities.get(entity);
        if (components) {
            return components.find(component => component.type === componentType);
        }
        return false;
    });
}