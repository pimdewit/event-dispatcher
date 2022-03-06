export interface EventDispatcherEvent {
  data?: unknown;
}

interface RegisteredEvent {
  listener: (event?: EventDispatcherEvent) => void;
}

/** JavaScript events for custom objects. */
class EventDispatcher<T extends number> {
  readonly events = new Map<T, RegisteredEvent['listener'][]>();

  private eventTypeExists(type: T) {
    return this.events.has(type);
  }

  addEventListener(type: T, listener: RegisteredEvent['listener']) {
    if (!this.eventTypeExists(type)) this.events.set(type, []);

    const eventMap = this.events.get(type)!;
    if (eventMap.includes(listener)) return;

    eventMap.push(listener);
  }

  removeEventListener(type: T, listener: RegisteredEvent['listener']) {
    if (!this.eventTypeExists(type)) return;

    const eventMap = this.events.get(type)!;
    const index = eventMap.indexOf(listener);
    if (index > -1) eventMap.splice(index, 1);
  }

  dispatchEvent(type: T, data?: EventDispatcherEvent) {
    if (!this.eventTypeExists(type)) return;

    const listeners = this.events.get(type)!;
    for (let i = 0; i < listeners.length; i++) listeners[i](data);
  }
}

export {EventDispatcher};
