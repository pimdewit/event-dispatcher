/** JavaScript events for custom objects. */
class EventDispatcher {
    constructor() {
        this.events = new Map();
    }
    eventTypeExists(type) {
        return this.events.has(type);
    }
    addEventListener(type, listener) {
        if (!this.eventTypeExists(type))
            this.events.set(type, []);
        const eventMap = this.events.get(type);
        if (eventMap.includes(listener))
            return;
        eventMap.push(listener);
    }
    removeEventListener(type, listener) {
        if (!this.eventTypeExists(type))
            return;
        const eventMap = this.events.get(type);
        const index = eventMap.indexOf(listener);
        if (index > -1)
            eventMap.splice(index, 1);
    }
    dispatchEvent(type, data) {
        if (!this.eventTypeExists(type))
            return;
        const listeners = this.events.get(type);
        for (let i = 0; i < listeners.length; i++)
            listeners[i](data);
    }
}
export { EventDispatcher };
