# EventDispatcher

Performant, opinionated event dispatcher.

## Installation

`npm install @pdw.io/eventdispatcher`

## Usage

Below is a very minimal example. The main thing to note is that the "event names" are strictly numbers (Enum keys in this case), this is where the performance comes from.

```typescript
import { EventDispatcher } from '@pdw.io/eventdispatcher';

export enum DialogEventName {
  OPEN,
  CLOSE,
}

class Dialog extends EventDispatcher<DialogEventName> {
  private open = false;

  toggle() {
    this.open = !this.open;
    const eventToSend = this.open ? DialogEventName.OPEN : DialogEventName.CLOSE;
    this.dispatchEvent(eventToSend);
  }
}

const dialog = new Dialog();
dialog.addEventListener(DialogEventName.OPEN, callback);
```

## Minification

The full source is available for import to work nicer with your bundler. Alternatively, there is an es5 & google-closure
compiled version available at `dist/`.

| Filename                 | Filesize    |
|--------------------------|-------------|
| `main.ts`                | 1,141 bytes |
| `dist/main.js` (default) | 998 bytes   |
| `dist/main.min.js`       | 540 bytes   |
