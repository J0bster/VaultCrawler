type Entity = number;

export type componentType = "NAME" | "STATS";

type component = {
    data: any;
}

export type world = {
    entities: Map<Entity, Map<componentType, component>>;
}

export function createWorld() {
    return {
        entities: new Map()
    };
}

export function createEntity(world: world, entity: Entity, component: component, componentType: componentType) {
    const components = new Map();
    // components.set(component.data, component);
    // components.set(component, component.data);
    components.set(componentType, component);
    //Q: Why does this not work?
    world.entities.set(entity, components);
}

export function addComponent(world: world, entity: Entity, component: component, componentType: componentType) {
    const components = world.entities.get(entity);
    if (components) {
        components.set(componentType, component);
    }
}

export function getComponent(world: world, entity: Entity, componentType: componentType) {
    const components = world.entities.get(entity);
    if (components) {
        return components.get(componentType);
    }
}

export function removeEntity(world: world, entity: Entity) {
    world.entities.delete(entity);
}

export function getEntities(world: world) {
    return Array.from(world.entities.keys());
}