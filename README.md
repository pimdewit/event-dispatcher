# EventDispatcher
Super simple class-level event dispatcher.

## Installation

`npm install @pdw.io/eventdispatcher`

## Usage

```javascript
import EventDispatcher from '@pdw.io/eventdispatcher';


class MyAwesomeModule extends EventDispatcher {
  constructor() {
    super();
    
    
    setTimeout(() => {
      this.dispatch('event-name')
    }, 1000);
  }
}


const module = new MyAwesomeModule();
module.addListener('eventname', () => {
  console.log('hey there.');
})
```


## Further explanation

Use EventDispatcher by extending it with a class.
EventDispatcher provides the following methods to your class;

`addListener(eventName, callback)`
`removeListener(eventName, callback)`
`dispatch(eventName, ?details)`
