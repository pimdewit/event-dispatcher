function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "EventDispatcher", () => $53ffd25df6034fb9$export$ec8b666c5fe2c75a);
/** JavaScript events for custom objects. */ class $53ffd25df6034fb9$export$ec8b666c5fe2c75a {
    eventTypeExists(type) {
        return this.events.has(type);
    }
    addEventListener(type, listener) {
        if (!this.eventTypeExists(type)) this.events.set(type, []);
        const eventMap = this.events.get(type);
        if (eventMap.includes(listener)) return;
        eventMap.push(listener);
    }
    removeEventListener(type, listener) {
        if (!this.eventTypeExists(type)) return;
        const eventMap = this.events.get(type);
        const index = eventMap.indexOf(listener);
        if (index > -1) eventMap.splice(index, 1);
    }
    dispatchEvent(type, data) {
        if (!this.eventTypeExists(type)) return;
        const listeners = this.events.get(type);
        for(let i = 0; i < listeners.length; i++)listeners[i](data);
    }
    constructor(){
        this.events = new Map();
    }
}


//# sourceMappingURL=event-dispatcher.js.map
