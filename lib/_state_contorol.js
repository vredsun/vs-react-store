"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.keys");

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
exports.initStore = exports.setDefaultValueToReducer = exports.removeSelectorToStack = exports.addSelectorToStack = exports.getSelectorValue = exports.compareOldValueWithNew = exports.setOfSelectors = void 0;

var _VsStoreContext = require("./VsStoreContext");

var _util = require("util");

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
var default_value_key = Symbol('default_value_key');

var setDefaultValueToReducer = function setDefaultValueToReducer(reducer, default_value) {
  reducer[default_value_key] = default_value;
};

exports.setDefaultValueToReducer = setDefaultValueToReducer;

var initStore = function initStore(reducer) {
  var newState = reducer[default_value_key];
  Object.keys(newState).forEach(function (key) {
    if ((0, _util.isFunction)(newState[key])) {
      newState[key] = initStore(newState[key]);
    }
  });
  return newState;
};

exports.initStore = initStore;
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
  reactHotLoader.register(default_value_key, "default_value_key", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(setDefaultValueToReducer, "setDefaultValueToReducer", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
  reactHotLoader.register(initStore, "initStore", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/_state_contorol.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9fc3RhdGVfY29udG9yb2wudHMiXSwibmFtZXMiOlsic2V0T2ZTZWxlY3RvcnMiLCJNYXAiLCJjb21wYXJlT2xkVmFsdWVXaXRoTmV3Iiwic3RhdGUiLCJmb3JFYWNoIiwic2VsZWN0b3JTdGF0ZSIsIm5ld1ZhbHVlIiwic2VsZWN0b3IiLCJjdXJyZW50VmFsdWUiLCJzZXRWYWx1ZXNNYXAiLCJzZXRWYWx1ZSIsImdldFNlbGVjdG9yVmFsdWUiLCJfc3RvcmUiLCJhZGRTZWxlY3RvclRvU3RhY2siLCJrZXkiLCJoYXMiLCJzZXQiLCJnZXQiLCJyZW1vdmVTZWxlY3RvclRvU3RhY2siLCJkZWxldGUiLCJzaXplIiwiZGVmYXVsdF92YWx1ZV9rZXkiLCJTeW1ib2wiLCJzZXREZWZhdWx0VmFsdWVUb1JlZHVjZXIiLCJyZWR1Y2VyIiwiZGVmYXVsdF92YWx1ZSIsImluaXRTdG9yZSIsIm5ld1N0YXRlIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7QUFJTyxJQUFNQSxjQUFjLEdBQUcsSUFBSUMsR0FBSixFQUF2Qjs7O0FBU0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFnQ0MsS0FBaEMsRUFBNkM7QUFDakZILEVBQUFBLGNBQWMsQ0FBQ0ksT0FBZixDQUF1QixVQUFDQyxhQUFELEVBQW1CO0FBQ3hDLFFBQU1DLFFBQVEsR0FBR0QsYUFBYSxDQUFDRSxRQUFkLENBQXVCSixLQUF2QixDQUFqQjs7QUFFQSxRQUFJRyxRQUFRLEtBQUtELGFBQWEsQ0FBQ0csWUFBL0IsRUFBNkM7QUFDM0NILE1BQUFBLGFBQWEsQ0FBQ0csWUFBZCxHQUE2QkYsUUFBN0I7QUFDQUQsTUFBQUEsYUFBYSxDQUFDSSxZQUFkLENBQTJCTCxPQUEzQixDQUFtQyxVQUFDTSxRQUFELEVBQWM7QUFDL0NBLFFBQUFBLFFBQVEsQ0FBQ0osUUFBRCxDQUFSO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FURDtBQVVELENBWE07Ozs7QUFhQSxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQStDSixRQUEvQyxFQUE0RTtBQUMxRyxTQUFPQSxRQUFRLENBQUNLLHNCQUFELENBQWY7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUErQ0MsR0FBL0MsRUFBNERQLFFBQTVELEVBQXNGQyxZQUF0RixFQUF1R0UsUUFBdkcsRUFBZ0s7QUFDaE0sTUFBSSxDQUFDVixjQUFjLENBQUNlLEdBQWYsQ0FBbUJSLFFBQW5CLENBQUwsRUFBbUM7QUFDakMsUUFBTUUsWUFBWSxHQUFHLElBQUlSLEdBQUosRUFBckI7QUFDQVEsSUFBQUEsWUFBWSxDQUFDTyxHQUFiLENBQWlCRixHQUFqQixFQUFzQkosUUFBdEI7QUFFQVYsSUFBQUEsY0FBYyxDQUFDZ0IsR0FBZixDQUFtQlQsUUFBbkIsRUFBNkI7QUFDM0JBLE1BQUFBLFFBQVEsRUFBUkEsUUFEMkI7QUFFM0JDLE1BQUFBLFlBQVksRUFBWkEsWUFGMkI7QUFHM0JDLE1BQUFBLFlBQVksRUFBWkE7QUFIMkIsS0FBN0I7QUFLRCxHQVRELE1BU087QUFDTFQsSUFBQUEsY0FBYyxDQUFDaUIsR0FBZixDQUFtQlYsUUFBbkIsRUFBNkJFLFlBQTdCLENBQTBDTyxHQUExQyxDQUE4Q0YsR0FBOUMsRUFBbURKLFFBQW5EO0FBQ0Q7QUFDRixDQWJNOzs7O0FBZUEsSUFBTVEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUErQ0osR0FBL0MsRUFBNERQLFFBQTVELEVBQXlGO0FBQzVILE1BQUlQLGNBQWMsQ0FBQ2UsR0FBZixDQUFtQlIsUUFBbkIsQ0FBSixFQUFrQztBQUNoQ1AsSUFBQUEsY0FBYyxDQUFDaUIsR0FBZixDQUFtQlYsUUFBbkIsRUFBNkJFLFlBQTdCLENBQTBDVSxNQUExQyxDQUFpREwsR0FBakQ7O0FBQ0EsUUFBSSxDQUFDZCxjQUFjLENBQUNpQixHQUFmLENBQW1CVixRQUFuQixFQUE2QkUsWUFBN0IsQ0FBMENXLElBQS9DLEVBQXFEO0FBQ25EcEIsTUFBQUEsY0FBYyxDQUFDbUIsTUFBZixDQUFzQlosUUFBdEI7QUFDRDtBQUNGO0FBQ0YsQ0FQTTs7O0FBU1AsSUFBTWMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQyxtQkFBRCxDQUFoQzs7QUFFTyxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLE9BQUQsRUFBZUMsYUFBZixFQUFpQztBQUN2RUQsRUFBQUEsT0FBTyxDQUFDSCxpQkFBRCxDQUFQLEdBQTZCSSxhQUE3QjtBQUNELENBRk07Ozs7QUFHQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixPQUFELEVBQWtCO0FBQ3pDLE1BQU1HLFFBQVEsR0FBR0gsT0FBTyxDQUFDSCxpQkFBRCxDQUF4QjtBQUVBTyxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUYsUUFBWixFQUFzQnZCLE9BQXRCLENBQ0UsVUFBQ1UsR0FBRCxFQUFTO0FBQ1AsUUFBSSxzQkFBV2EsUUFBUSxDQUFDYixHQUFELENBQW5CLENBQUosRUFBK0I7QUFDN0JhLE1BQUFBLFFBQVEsQ0FBQ2IsR0FBRCxDQUFSLEdBQWdCWSxTQUFTLENBQUNDLFFBQVEsQ0FBQ2IsR0FBRCxDQUFULENBQXpCO0FBQ0Q7QUFDRixHQUxIO0FBUUEsU0FBT2EsUUFBUDtBQUNELENBWk07Ozs7Ozs7Ozs7OzswQkF2RE0zQixjOzBCQVNBRSxzQjswQkFhQVMsZ0I7MEJBSUFFLGtCOzBCQWVBSyxxQjswQkFTUEcsaUI7MEJBRU9FLHdCOzBCQUdBRyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX3N0b3JlIH0gZnJvbSAnLi9Wc1N0b3JlQ29udGV4dCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndXRpbCc7XG5cbnR5cGUgU2VsZWN0b3I8ViBleHRlbmRzIGFueSwgUyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+ID0gKHN0b3JlOiBTKSA9PiBWO1xuXG5leHBvcnQgY29uc3Qgc2V0T2ZTZWxlY3RvcnMgPSBuZXcgTWFwPGFueSwge1xuICBzZWxlY3RvcjogU2VsZWN0b3I8YW55LCB7fT47XG4gIGN1cnJlbnRWYWx1ZTogYW55O1xuICBzZXRWYWx1ZXNNYXA6IE1hcDxcbiAgICBTeW1ib2wsXG4gICAgKHZhbHVlOiBSZXR1cm5UeXBlPFNlbGVjdG9yPGFueSwge30+PikgPT4gYW55XG4gID47XG59PigpO1xuXG5leHBvcnQgY29uc3QgY29tcGFyZU9sZFZhbHVlV2l0aE5ldyA9IDxTIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oc3RhdGU6IFMpID0+IHtcbiAgc2V0T2ZTZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3JTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gc2VsZWN0b3JTdGF0ZS5zZWxlY3RvcihzdGF0ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IHNlbGVjdG9yU3RhdGUuY3VycmVudFZhbHVlKSB7XG4gICAgICBzZWxlY3RvclN0YXRlLmN1cnJlbnRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgc2VsZWN0b3JTdGF0ZS5zZXRWYWx1ZXNNYXAuZm9yRWFjaCgoc2V0VmFsdWUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RvclZhbHVlID0gPFYgZXh0ZW5kcyBhbnksIFMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihzZWxlY3RvcjogU2VsZWN0b3I8ViwgUz4pID0+IHtcbiAgcmV0dXJuIHNlbGVjdG9yKF9zdG9yZSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU2VsZWN0b3JUb1N0YWNrID0gPFYgZXh0ZW5kcyBhbnksIFMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihrZXk6IFN5bWJvbCwgc2VsZWN0b3I6IFNlbGVjdG9yPFYsIFM+LCBjdXJyZW50VmFsdWU6IFYsIHNldFZhbHVlOiAodmFsdWU6IFJldHVyblR5cGU8U2VsZWN0b3I8ViwgUz4+KSA9PiBhbnkpID0+IHtcbiAgaWYgKCFzZXRPZlNlbGVjdG9ycy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgY29uc3Qgc2V0VmFsdWVzTWFwID0gbmV3IE1hcCgpO1xuICAgIHNldFZhbHVlc01hcC5zZXQoa2V5LCBzZXRWYWx1ZSk7XG5cbiAgICBzZXRPZlNlbGVjdG9ycy5zZXQoc2VsZWN0b3IsIHtcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgY3VycmVudFZhbHVlLFxuICAgICAgc2V0VmFsdWVzTWFwLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNldE9mU2VsZWN0b3JzLmdldChzZWxlY3Rvcikuc2V0VmFsdWVzTWFwLnNldChrZXksIHNldFZhbHVlKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVNlbGVjdG9yVG9TdGFjayA9IDxWIGV4dGVuZHMgYW55LCBTIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oa2V5OiBTeW1ib2wsIHNlbGVjdG9yOiBTZWxlY3RvcjxWLCBTPikgPT4ge1xuICBpZiAoc2V0T2ZTZWxlY3RvcnMuaGFzKHNlbGVjdG9yKSkge1xuICAgIHNldE9mU2VsZWN0b3JzLmdldChzZWxlY3Rvcikuc2V0VmFsdWVzTWFwLmRlbGV0ZShrZXkpO1xuICAgIGlmICghc2V0T2ZTZWxlY3RvcnMuZ2V0KHNlbGVjdG9yKS5zZXRWYWx1ZXNNYXAuc2l6ZSkge1xuICAgICAgc2V0T2ZTZWxlY3RvcnMuZGVsZXRlKHNlbGVjdG9yKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlZmF1bHRfdmFsdWVfa2V5ID0gU3ltYm9sKCdkZWZhdWx0X3ZhbHVlX2tleScpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFZhbHVlVG9SZWR1Y2VyID0gKHJlZHVjZXI6IGFueSwgZGVmYXVsdF92YWx1ZSkgPT4ge1xuICByZWR1Y2VyW2RlZmF1bHRfdmFsdWVfa2V5XSA9IGRlZmF1bHRfdmFsdWU7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChyZWR1Y2VyOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyW2RlZmF1bHRfdmFsdWVfa2V5XTtcblxuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaChcbiAgICAoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZVtrZXldKSkge1xuICAgICAgICBuZXdTdGF0ZVtrZXldID0gaW5pdFN0b3JlKG5ld1N0YXRlW2tleV0pO1xuICAgICAgfVxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufTtcbiJdfQ==