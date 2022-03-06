# EventDispatcher

Performant, opinionated event dispatcher.

## Installation

`npm install @pdw.io/event-dispatcher`

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
