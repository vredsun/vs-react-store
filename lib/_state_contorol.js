"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/esnext.map.delete-all");

require("core-js/modules/esnext.map.every");

require("core-js/modules/esnext.map.filter");

require("core-js/modules/esnext.map.find");

require("core-js/modules/esnext.map.find-key");

require("core-js/modules/esnext.map.includes");

require("core-js/modules/esnext.map.key-of");

require("core-js/modules/esnext.map.map-keys");

require("core-js/modules/esnext.map.map-values");

require("core-js/modules/esnext.map.merge");

require("core-js/modules/esnext.map.reduce");

require("core-js/modules/esnext.map.some");

require("core-js/modules/esnext.map.update");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSelectorToStack = exports.addSelectorToStack = exports.getSelectorValue = exports.compareOldValueWithNew = exports.setOfSelectors = void 0;

var _VsStoreContext = require("./VsStoreContext");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var setOfSelectors = new Map();
exports.setOfSelectors = setOfSelectors;

var compareOldValueWithNew = function compareOldValueWithNew(state) {
  setOfSelectors.forEach(function (selectorState) {
    var newValue = selectorState.selector(state);

    if (newValue !== selectorState.currentValue) {
      selectorState.currentValue = newValue;
      selectorState.setValuesMap.forEach(function (setValue) {
        setValue(newValue);
      });
    }
  });
};

exports.compareOldValueWithNew = compareOldValueWithNew;

var getSelectorValue = function getSelectorValue(selector) {
  return selector(_VsStoreContext._store);
};

exports.getSelectorValue = getSelectorValue;

var addSelectorToStack = function addSelectorToStack(key, selector, currentValue, setValue) {
  if (!setOfSelectors.has(selector)) {
    var setValuesMap = new Map();
    setValuesMap.set(key, setValue);
    setOfSelectors.set(selector, {
      selector: selector,
      currentValue: currentValue,
      setValuesMap: setValuesMap
    });
  } else {
    setOfSelectors.get(selector).setValuesMap.set(key, setValue);
  }
};

exports.addSelectorToStack = addSelectorToStack;

var removeSelectorToStack = function removeSelectorToStack(key, selector) {
  if (setOfSelectors.has(selector)) {
    setOfSelectors.get(selector).setValuesMap.delete(key);

    if (!setOfSelectors.get(selector).setValuesMap.size) {
      setOfSelectors.delete(selector);
    }
  }
};

exports.removeSelectorToStack = removeSelectorToStack;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setOfSelectors, "setOfSelectors", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(compareOldValueWithNew, "compareOldValueWithNew", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(getSelectorValue, "getSelectorValue", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(addSelectorToStack, "addSelectorToStack", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(removeSelectorToStack, "removeSelectorToStack", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9fc3RhdGVfY29udG9yb2wudHMiXSwibmFtZXMiOlsic2V0T2ZTZWxlY3RvcnMiLCJNYXAiLCJjb21wYXJlT2xkVmFsdWVXaXRoTmV3Iiwic3RhdGUiLCJmb3JFYWNoIiwic2VsZWN0b3JTdGF0ZSIsIm5ld1ZhbHVlIiwic2VsZWN0b3IiLCJjdXJyZW50VmFsdWUiLCJzZXRWYWx1ZXNNYXAiLCJzZXRWYWx1ZSIsImdldFNlbGVjdG9yVmFsdWUiLCJfc3RvcmUiLCJhZGRTZWxlY3RvclRvU3RhY2siLCJrZXkiLCJoYXMiLCJzZXQiLCJnZXQiLCJyZW1vdmVTZWxlY3RvclRvU3RhY2siLCJkZWxldGUiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUlPLElBQU1BLGNBQWMsR0FBRyxJQUFJQyxHQUFKLEVBQXZCOzs7QUFTQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQWdDQyxLQUFoQyxFQUE2QztBQUNqRkgsRUFBQUEsY0FBYyxDQUFDSSxPQUFmLENBQXVCLFVBQUNDLGFBQUQsRUFBbUI7QUFDeEMsUUFBTUMsUUFBUSxHQUFHRCxhQUFhLENBQUNFLFFBQWQsQ0FBdUJKLEtBQXZCLENBQWpCOztBQUVBLFFBQUlHLFFBQVEsS0FBS0QsYUFBYSxDQUFDRyxZQUEvQixFQUE2QztBQUMzQ0gsTUFBQUEsYUFBYSxDQUFDRyxZQUFkLEdBQTZCRixRQUE3QjtBQUNBRCxNQUFBQSxhQUFhLENBQUNJLFlBQWQsQ0FBMkJMLE9BQTNCLENBQW1DLFVBQUNNLFFBQUQsRUFBYztBQUMvQ0EsUUFBQUEsUUFBUSxDQUFDSixRQUFELENBQVI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQVREO0FBVUQsQ0FYTTs7OztBQWFBLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBK0NKLFFBQS9DLEVBQTRFO0FBQzFHLFNBQU9BLFFBQVEsQ0FBQ0ssc0JBQUQsQ0FBZjtBQUNELENBRk07Ozs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQStDQyxHQUEvQyxFQUE0RFAsUUFBNUQsRUFBc0ZDLFlBQXRGLEVBQXVHRSxRQUF2RyxFQUFnSztBQUNoTSxNQUFJLENBQUNWLGNBQWMsQ0FBQ2UsR0FBZixDQUFtQlIsUUFBbkIsQ0FBTCxFQUFtQztBQUNqQyxRQUFNRSxZQUFZLEdBQUcsSUFBSVIsR0FBSixFQUFyQjtBQUNBUSxJQUFBQSxZQUFZLENBQUNPLEdBQWIsQ0FBaUJGLEdBQWpCLEVBQXNCSixRQUF0QjtBQUVBVixJQUFBQSxjQUFjLENBQUNnQixHQUFmLENBQW1CVCxRQUFuQixFQUE2QjtBQUMzQkEsTUFBQUEsUUFBUSxFQUFSQSxRQUQyQjtBQUUzQkMsTUFBQUEsWUFBWSxFQUFaQSxZQUYyQjtBQUczQkMsTUFBQUEsWUFBWSxFQUFaQTtBQUgyQixLQUE3QjtBQUtELEdBVEQsTUFTTztBQUNMVCxJQUFBQSxjQUFjLENBQUNpQixHQUFmLENBQW1CVixRQUFuQixFQUE2QkUsWUFBN0IsQ0FBMENPLEdBQTFDLENBQThDRixHQUE5QyxFQUFtREosUUFBbkQ7QUFDRDtBQUNGLENBYk07Ozs7QUFlQSxJQUFNUSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQStDSixHQUEvQyxFQUE0RFAsUUFBNUQsRUFBeUY7QUFDNUgsTUFBSVAsY0FBYyxDQUFDZSxHQUFmLENBQW1CUixRQUFuQixDQUFKLEVBQWtDO0FBQ2hDUCxJQUFBQSxjQUFjLENBQUNpQixHQUFmLENBQW1CVixRQUFuQixFQUE2QkUsWUFBN0IsQ0FBMENVLE1BQTFDLENBQWlETCxHQUFqRDs7QUFDQSxRQUFJLENBQUNkLGNBQWMsQ0FBQ2lCLEdBQWYsQ0FBbUJWLFFBQW5CLEVBQTZCRSxZQUE3QixDQUEwQ1csSUFBL0MsRUFBcUQ7QUFDbkRwQixNQUFBQSxjQUFjLENBQUNtQixNQUFmLENBQXNCWixRQUF0QjtBQUNEO0FBQ0Y7QUFDRixDQVBNOzs7Ozs7Ozs7Ozs7MEJBekNNUCxjOzBCQVNBRSxzQjswQkFhQVMsZ0I7MEJBSUFFLGtCOzBCQWVBSyxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9zdG9yZSB9IGZyb20gJy4vVnNTdG9yZUNvbnRleHQnO1xuXG50eXBlIFNlbGVjdG9yPFYgZXh0ZW5kcyBhbnksIFMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PiA9IChzdG9yZTogUykgPT4gVjtcblxuZXhwb3J0IGNvbnN0IHNldE9mU2VsZWN0b3JzID0gbmV3IE1hcDxhbnksIHtcbiAgc2VsZWN0b3I6IFNlbGVjdG9yPGFueSwge30+O1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgc2V0VmFsdWVzTWFwOiBNYXA8XG4gICAgU3ltYm9sLFxuICAgICh2YWx1ZTogUmV0dXJuVHlwZTxTZWxlY3RvcjxhbnksIHt9Pj4pID0+IGFueVxuICA+O1xufT4oKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVPbGRWYWx1ZVdpdGhOZXcgPSA8UyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHN0YXRlOiBTKSA9PiB7XG4gIHNldE9mU2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yU3RhdGUpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHNlbGVjdG9yU3RhdGUuc2VsZWN0b3Ioc3RhdGUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBzZWxlY3RvclN0YXRlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgc2VsZWN0b3JTdGF0ZS5jdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHNlbGVjdG9yU3RhdGUuc2V0VmFsdWVzTWFwLmZvckVhY2goKHNldFZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0b3JWYWx1ZSA9IDxWIGV4dGVuZHMgYW55LCBTIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oc2VsZWN0b3I6IFNlbGVjdG9yPFYsIFM+KSA9PiB7XG4gIHJldHVybiBzZWxlY3Rvcihfc3RvcmUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFNlbGVjdG9yVG9TdGFjayA9IDxWIGV4dGVuZHMgYW55LCBTIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oa2V5OiBTeW1ib2wsIHNlbGVjdG9yOiBTZWxlY3RvcjxWLCBTPiwgY3VycmVudFZhbHVlOiBWLCBzZXRWYWx1ZTogKHZhbHVlOiBSZXR1cm5UeXBlPFNlbGVjdG9yPFYsIFM+PikgPT4gYW55KSA9PiB7XG4gIGlmICghc2V0T2ZTZWxlY3RvcnMuaGFzKHNlbGVjdG9yKSkge1xuICAgIGNvbnN0IHNldFZhbHVlc01hcCA9IG5ldyBNYXAoKTtcbiAgICBzZXRWYWx1ZXNNYXAuc2V0KGtleSwgc2V0VmFsdWUpO1xuXG4gICAgc2V0T2ZTZWxlY3RvcnMuc2V0KHNlbGVjdG9yLCB7XG4gICAgICBzZWxlY3RvcixcbiAgICAgIGN1cnJlbnRWYWx1ZSxcbiAgICAgIHNldFZhbHVlc01hcCxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRPZlNlbGVjdG9ycy5nZXQoc2VsZWN0b3IpLnNldFZhbHVlc01hcC5zZXQoa2V5LCBzZXRWYWx1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVTZWxlY3RvclRvU3RhY2sgPSA8ViBleHRlbmRzIGFueSwgUyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KGtleTogU3ltYm9sLCBzZWxlY3RvcjogU2VsZWN0b3I8ViwgUz4pID0+IHtcbiAgaWYgKHNldE9mU2VsZWN0b3JzLmhhcyhzZWxlY3RvcikpIHtcbiAgICBzZXRPZlNlbGVjdG9ycy5nZXQoc2VsZWN0b3IpLnNldFZhbHVlc01hcC5kZWxldGUoa2V5KTtcbiAgICBpZiAoIXNldE9mU2VsZWN0b3JzLmdldChzZWxlY3Rvcikuc2V0VmFsdWVzTWFwLnNpemUpIHtcbiAgICAgIHNldE9mU2VsZWN0b3JzLmRlbGV0ZShzZWxlY3Rvcik7XG4gICAgfVxuICB9XG59O1xuIl19