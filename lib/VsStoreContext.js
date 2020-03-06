"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VsStoreProvider = exports._dispatch = exports._store = void 0;

var React = _interopRequireWildcard(require("react"));

var _state_contorol = require("./_state_contorol");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var VsStoreContext = React.createContext([{}, function () {
  /* */
}]);
var _store = {};
exports._store = _store;

var _dispatch = function _dispatch() {
  throw new Error('use VsStoreProvider'); //
};

exports._dispatch = _dispatch;
var STORE_ELEMENT = 0;
var DISPATCH_ELEMENT = 1;
var VsStoreProvider = React.memo(__signature__(function (props) {
  var reducerData = React.useReducer(props.reducer, props.defaultValue, props.initStore);
  exports._store = _store = reducerData[STORE_ELEMENT];
  exports._dispatch = _dispatch = reducerData[DISPATCH_ELEMENT];
  (0, _state_contorol.compareOldValueWithNew)(_store);
  return React.createElement(VsStoreContext.Provider, {
    value: reducerData
  }, props.children);
}, "useReducer{reducerData(props.defaultValue)}"));
exports.VsStoreProvider = VsStoreProvider;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VsStoreContext, "VsStoreContext", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
  reactHotLoader.register(_store, "_store", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
  reactHotLoader.register(_dispatch, "_dispatch", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
  reactHotLoader.register(STORE_ELEMENT, "STORE_ELEMENT", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
  reactHotLoader.register(DISPATCH_ELEMENT, "DISPATCH_ELEMENT", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
  reactHotLoader.register(VsStoreProvider, "VsStoreProvider", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/VsStoreContext.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9Wc1N0b3JlQ29udGV4dC50c3giXSwibmFtZXMiOlsiVnNTdG9yZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJfc3RvcmUiLCJfZGlzcGF0Y2giLCJFcnJvciIsIlNUT1JFX0VMRU1FTlQiLCJESVNQQVRDSF9FTEVNRU5UIiwiVnNTdG9yZVByb3ZpZGVyIiwibWVtbyIsInByb3BzIiwicmVkdWNlckRhdGEiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImRlZmF1bHRWYWx1ZSIsImluaXRTdG9yZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsY0FBYyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sQ0FDckIsQ0FDRSxFQURGLEVBRUUsWUFBTTtBQUFDO0FBQU0sQ0FGZixDQURxQixDQUF2QjtBQU9PLElBQUlDLE1BQVcsR0FBRyxFQUFsQjs7O0FBQ0EsSUFBSUMsU0FBOEIsR0FBRyxxQkFBTTtBQUNoRCxRQUFNLElBQUlDLEtBQUosQ0FBVSxxQkFBVixDQUFOLENBRGdELENBRWhEO0FBQ0QsQ0FITTs7O0FBV1AsSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFFTyxJQUFNQyxlQUErQyxHQUFHUCxLQUFLLENBQUNRLElBQU4sZUFDN0QsVUFBQ0MsS0FBRCxFQUFXO0FBQ1QsTUFBTUMsV0FBVyxHQUFHVixLQUFLLENBQUNXLFVBQU4sQ0FBaUJGLEtBQUssQ0FBQ0csT0FBdkIsRUFBZ0NILEtBQUssQ0FBQ0ksWUFBdEMsRUFBb0RKLEtBQUssQ0FBQ0ssU0FBMUQsQ0FBcEI7QUFFQSxtQkFBQVosTUFBTSxHQUFHUSxXQUFXLENBQUNMLGFBQUQsQ0FBcEI7QUFDQSxzQkFBQUYsU0FBUyxHQUFHTyxXQUFXLENBQUNKLGdCQUFELENBQXZCO0FBQ0EsOENBQXVCSixNQUF2QjtBQUVBLFNBQ0Usb0JBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixJQUFBLEtBQUssRUFBRVE7QUFBaEMsS0FDR0QsS0FBSyxDQUFDTSxRQURULENBREY7QUFLRCxDQWI0RCxpREFBeEQ7Ozs7Ozs7Ozs7OzBCQXRCRGhCLGM7MEJBT0tHLE07MEJBQ0FDLFM7MEJBV0xFLGE7MEJBQ0FDLGdCOzBCQUVPQyxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb21wYXJlT2xkVmFsdWVXaXRoTmV3IH0gZnJvbSAnLi9fc3RhdGVfY29udG9yb2wnO1xuXG50eXBlIFZzU3RvcmVDb250ZXh0VmFsdWVTdGF0ZSA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmNvbnN0IFZzU3RvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxhbnk+KFxuICBbXG4gICAge30sXG4gICAgKCkgPT4gey8qICovfSxcbiAgXSxcbik7XG5cbmV4cG9ydCBsZXQgX3N0b3JlOiBhbnkgPSB7fTtcbmV4cG9ydCBsZXQgX2Rpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxhbnk+ID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3VzZSBWc1N0b3JlUHJvdmlkZXInKTtcbiAgLy9cbn07XG5cbmV4cG9ydCB0eXBlIFZzU3RvcmVQcm92aWRlclByb3BzID0ge1xuICByZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFZzU3RvcmVDb250ZXh0VmFsdWVTdGF0ZSwgYW55PjtcbiAgZGVmYXVsdFZhbHVlOiBWc1N0b3JlQ29udGV4dFZhbHVlU3RhdGU7XG4gIGluaXRTdG9yZTogKHN0b3JlOiBWc1N0b3JlQ29udGV4dFZhbHVlU3RhdGUpID0+IFZzU3RvcmVDb250ZXh0VmFsdWVTdGF0ZTtcbn07XG5cbmNvbnN0IFNUT1JFX0VMRU1FTlQgPSAwO1xuY29uc3QgRElTUEFUQ0hfRUxFTUVOVCA9IDE7XG5cbmV4cG9ydCBjb25zdCBWc1N0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFZzU3RvcmVQcm92aWRlclByb3BzPiA9IFJlYWN0Lm1lbW8oXG4gIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJlZHVjZXJEYXRhID0gUmVhY3QudXNlUmVkdWNlcihwcm9wcy5yZWR1Y2VyLCBwcm9wcy5kZWZhdWx0VmFsdWUsIHByb3BzLmluaXRTdG9yZSk7XG5cbiAgICBfc3RvcmUgPSByZWR1Y2VyRGF0YVtTVE9SRV9FTEVNRU5UXTtcbiAgICBfZGlzcGF0Y2ggPSByZWR1Y2VyRGF0YVtESVNQQVRDSF9FTEVNRU5UXTtcbiAgICBjb21wYXJlT2xkVmFsdWVXaXRoTmV3KF9zdG9yZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZzU3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZWR1Y2VyRGF0YX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvVnNTdG9yZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfSxcbik7XG4iXX0=