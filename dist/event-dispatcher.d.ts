export interface EventDispatcherEvent {
    data?: unknown;
}
interface RegisteredEvent {
    listener: (event?: EventDispatcherEvent) => void;
}
/** JavaScript events for custom objects. */
export class EventDispatcher<T extends number> {
    readonly events: Map<T, ((event?: EventDispatcherEvent) => void)[]>;
    addEventListener(type: T, listener: RegisteredEvent['listener']): void;
    removeEventListener(type: T, listener: RegisteredEvent['listener']): void;
    dispatchEvent(type: T, data?: EventDispatcherEvent): void;
}

//# sourceMappingURL=event-dispatcher.d.ts.map
