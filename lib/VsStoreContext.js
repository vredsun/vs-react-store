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
  var reducerData = React.useReducer(props.reducer, (0, _state_contorol.initStore)(props.reducer));
  exports._store = _store = reducerData[STORE_ELEMENT];
  exports._dispatch = _dispatch = reducerData[DISPATCH_ELEMENT];
  (0, _state_contorol.compareOldValueWithNew)(_store);
  return React.createElement(VsStoreContext.Provider, {
    value: reducerData
  }, props.children);
}, "useReducer{reducerData(initStore(props.reducer))}"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9Wc1N0b3JlQ29udGV4dC50c3giXSwibmFtZXMiOlsiVnNTdG9yZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJfc3RvcmUiLCJfZGlzcGF0Y2giLCJFcnJvciIsIlNUT1JFX0VMRU1FTlQiLCJESVNQQVRDSF9FTEVNRU5UIiwiVnNTdG9yZVByb3ZpZGVyIiwibWVtbyIsInByb3BzIiwicmVkdWNlckRhdGEiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsY0FBYyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sQ0FDckIsQ0FDRSxFQURGLEVBRUUsWUFBTTtBQUFDO0FBQU0sQ0FGZixDQURxQixDQUF2QjtBQU9PLElBQUlDLE1BQVcsR0FBRyxFQUFsQjs7O0FBQ0EsSUFBSUMsU0FBOEIsR0FBRyxxQkFBTTtBQUNoRCxRQUFNLElBQUlDLEtBQUosQ0FBVSxxQkFBVixDQUFOLENBRGdELENBRWhEO0FBQ0QsQ0FITTs7O0FBU1AsSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFFTyxJQUFNQyxlQUErQyxHQUFHUCxLQUFLLENBQUNRLElBQU4sZUFDN0QsVUFBQ0MsS0FBRCxFQUFXO0FBQ1QsTUFBTUMsV0FBVyxHQUFHVixLQUFLLENBQUNXLFVBQU4sQ0FBaUJGLEtBQUssQ0FBQ0csT0FBdkIsRUFBZ0MsK0JBQVVILEtBQUssQ0FBQ0csT0FBaEIsQ0FBaEMsQ0FBcEI7QUFFQSxtQkFBQVYsTUFBTSxHQUFHUSxXQUFXLENBQUNMLGFBQUQsQ0FBcEI7QUFDQSxzQkFBQUYsU0FBUyxHQUFHTyxXQUFXLENBQUNKLGdCQUFELENBQXZCO0FBQ0EsOENBQXVCSixNQUF2QjtBQUVBLFNBQ0Usb0JBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixJQUFBLEtBQUssRUFBRVE7QUFBaEMsS0FDR0QsS0FBSyxDQUFDSSxRQURULENBREY7QUFLRCxDQWI0RCx1REFBeEQ7Ozs7Ozs7Ozs7OzBCQXBCRGQsYzswQkFPS0csTTswQkFDQUMsUzswQkFTTEUsYTswQkFDQUMsZ0I7MEJBRU9DLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbXBhcmVPbGRWYWx1ZVdpdGhOZXcsIGluaXRTdG9yZSB9IGZyb20gJy4vX3N0YXRlX2NvbnRvcm9sJztcblxudHlwZSBWc1N0b3JlQ29udGV4dFZhbHVlU3RhdGUgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5jb25zdCBWc1N0b3JlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8YW55PihcbiAgW1xuICAgIHt9LFxuICAgICgpID0+IHsvKiAqL30sXG4gIF0sXG4pO1xuXG5leHBvcnQgbGV0IF9zdG9yZTogYW55ID0ge307XG5leHBvcnQgbGV0IF9kaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8YW55PiA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCd1c2UgVnNTdG9yZVByb3ZpZGVyJyk7XG4gIC8vXG59O1xuXG5leHBvcnQgdHlwZSBWc1N0b3JlUHJvdmlkZXJQcm9wcyA9IHtcbiAgcmVkdWNlcjogUmVhY3QuUmVkdWNlcjxWc1N0b3JlQ29udGV4dFZhbHVlU3RhdGUsIGFueT47XG59O1xuXG5jb25zdCBTVE9SRV9FTEVNRU5UID0gMDtcbmNvbnN0IERJU1BBVENIX0VMRU1FTlQgPSAxO1xuXG5leHBvcnQgY29uc3QgVnNTdG9yZVByb3ZpZGVyOiBSZWFjdC5GQzxWc1N0b3JlUHJvdmlkZXJQcm9wcz4gPSBSZWFjdC5tZW1vKFxuICAocHJvcHMpID0+IHtcbiAgICBjb25zdCByZWR1Y2VyRGF0YSA9IFJlYWN0LnVzZVJlZHVjZXIocHJvcHMucmVkdWNlciwgaW5pdFN0b3JlKHByb3BzLnJlZHVjZXIpKTtcblxuICAgIF9zdG9yZSA9IHJlZHVjZXJEYXRhW1NUT1JFX0VMRU1FTlRdO1xuICAgIF9kaXNwYXRjaCA9IHJlZHVjZXJEYXRhW0RJU1BBVENIX0VMRU1FTlRdO1xuICAgIGNvbXBhcmVPbGRWYWx1ZVdpdGhOZXcoX3N0b3JlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VnNTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3JlZHVjZXJEYXRhfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Wc1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9LFxuKTtcbiJdfQ==