# EventDispatcher

Performant, opiniated event dispatcher.

## Installation

`npm install @pdw.io/eventdispatcher`

## Usage

Below is a very minimal example. The main thing to note is that the "event names" are strictly Enum keys, this is where
the performance comes from.

```typescript
import { EventDispatcher } from '@pdw.io/eventdispatcher';

export enum MyCustomEvent {
  OPEN,
  CLOSE,
}

class Dialog extends EventDispatcher<MyCustomEvent> {
  private open = false;

  toggle() {
    this.open = !this.open;
    const eventToSend = this.open ? MyCustomEvent.OPEN : MyCustomEvent.CLOSE;
    this.dispatchEvent(eventToSend);
  }
}
```

## Minification

The full source is imported by default to work nicer with your bundler. Alternatively, there is an es5 & google-closure
compiled version available at `dist/`.

| Filename           | Filesize    |
|--------------------|-------------|
| `main.ts`          | 1,141 bytes |
| `dist/main.js`     | 998 bytes   |
| `dist/main.min.js` | 540 bytes   |
