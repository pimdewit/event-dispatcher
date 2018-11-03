const EventDispatcher = function () {
  this._events = {}
};
EventDispatcher.prototype.addListener = function (a, b) {
  this._events[a] || (this._events[a] = {listeners: []});
  this._events[a].listeners.push(b)
};
EventDispatcher.prototype.removeListener = function (a, b) {
  this._events[a].listeners = this._events[a].listeners.filter(function (a) {
    return a.toString() !== b.toString()
  })
};
EventDispatcher.prototype.dispatch = function (a, b) {
  this._events[a].listeners.forEach(function (a) {
    a(b)
  })
};

export default EventDispatcher;
