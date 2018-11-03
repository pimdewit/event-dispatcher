/**
 * Custom class event dispatcher.
 */
class EventDispatcher {
  /** @constructs {EventDispatcher} */
  constructor() {
    this._events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   */
  addListener(eventName, callback) {
    // Check if the event type already exists.
    if (!this._events[eventName]) {
      this._events[eventName] = {
        listeners: [],
      };
    }

    this._events[eventName].listeners.push(callback);
  }


  /**
   * @param {string} eventName
   * @param {Function} callback
   */
  removeListener(eventName, callback) {
    this._events[eventName].listeners = this._events[eventName].listeners.filter((listener) => {
      return listener.toString() !== callback.toString();
    });
  }


  /**
   * @param {string} eventName
   * @param {*} details
   */
  dispatch(eventName, details = undefined) {
    if (this._events[eventName]) {
      this._events[eventName].listeners.forEach((listener) => {
        listener(details);
      });
    }
  }
}

export default EventDispatcher;
