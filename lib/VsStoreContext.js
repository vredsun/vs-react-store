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
var VsStoreProvider = React.memo(function (props) {
  var reducerData = React.useReducer(props.reducer, (0, _state_contorol.initStore)(props.reducer));
  exports._store = _store = reducerData[STORE_ELEMENT];
  exports._dispatch = _dispatch = reducerData[DISPATCH_ELEMENT];
  (0, _state_contorol.compareOldValueWithNew)(_store);
  return React.createElement(VsStoreContext.Provider, {
    value: reducerData
  }, props.children);
});
exports.VsStoreProvider = VsStoreProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9Wc1N0b3JlQ29udGV4dC50c3giXSwibmFtZXMiOlsiVnNTdG9yZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJfc3RvcmUiLCJfZGlzcGF0Y2giLCJFcnJvciIsIlNUT1JFX0VMRU1FTlQiLCJESVNQQVRDSF9FTEVNRU5UIiwiVnNTdG9yZVByb3ZpZGVyIiwibWVtbyIsInByb3BzIiwicmVkdWNlckRhdGEiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBSUEsSUFBTUEsY0FBYyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sQ0FDckIsQ0FDRSxFQURGLEVBRUUsWUFBTTtBQUFDO0FBQU0sQ0FGZixDQURxQixDQUF2QjtBQU9PLElBQUlDLE1BQVcsR0FBRyxFQUFsQjs7O0FBQ0EsSUFBSUMsU0FBOEIsR0FBRyxxQkFBTTtBQUNoRCxRQUFNLElBQUlDLEtBQUosQ0FBVSxxQkFBVixDQUFOLENBRGdELENBRWhEO0FBQ0QsQ0FITTs7O0FBU1AsSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFFTyxJQUFNQyxlQUErQyxHQUFHUCxLQUFLLENBQUNRLElBQU4sQ0FDN0QsVUFBQ0MsS0FBRCxFQUFXO0FBQ1QsTUFBTUMsV0FBVyxHQUFHVixLQUFLLENBQUNXLFVBQU4sQ0FBaUJGLEtBQUssQ0FBQ0csT0FBdkIsRUFBZ0MsK0JBQVVILEtBQUssQ0FBQ0csT0FBaEIsQ0FBaEMsQ0FBcEI7QUFFQSxtQkFBQVYsTUFBTSxHQUFHUSxXQUFXLENBQUNMLGFBQUQsQ0FBcEI7QUFDQSxzQkFBQUYsU0FBUyxHQUFHTyxXQUFXLENBQUNKLGdCQUFELENBQXZCO0FBQ0EsOENBQXVCSixNQUF2QjtBQUVBLFNBQ0Usb0JBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixJQUFBLEtBQUssRUFBRVE7QUFBaEMsS0FDR0QsS0FBSyxDQUFDSSxRQURULENBREY7QUFLRCxDQWI0RCxDQUF4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29tcGFyZU9sZFZhbHVlV2l0aE5ldywgaW5pdFN0b3JlIH0gZnJvbSAnLi9fc3RhdGVfY29udG9yb2wnO1xuXG50eXBlIFZzU3RvcmVDb250ZXh0VmFsdWVTdGF0ZSA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmNvbnN0IFZzU3RvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxhbnk+KFxuICBbXG4gICAge30sXG4gICAgKCkgPT4gey8qICovfSxcbiAgXSxcbik7XG5cbmV4cG9ydCBsZXQgX3N0b3JlOiBhbnkgPSB7fTtcbmV4cG9ydCBsZXQgX2Rpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxhbnk+ID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3VzZSBWc1N0b3JlUHJvdmlkZXInKTtcbiAgLy9cbn07XG5cbmV4cG9ydCB0eXBlIFZzU3RvcmVQcm92aWRlclByb3BzID0ge1xuICByZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFZzU3RvcmVDb250ZXh0VmFsdWVTdGF0ZSwgYW55Pjtcbn07XG5cbmNvbnN0IFNUT1JFX0VMRU1FTlQgPSAwO1xuY29uc3QgRElTUEFUQ0hfRUxFTUVOVCA9IDE7XG5cbmV4cG9ydCBjb25zdCBWc1N0b3JlUHJvdmlkZXI6IFJlYWN0LkZDPFZzU3RvcmVQcm92aWRlclByb3BzPiA9IFJlYWN0Lm1lbW8oXG4gIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJlZHVjZXJEYXRhID0gUmVhY3QudXNlUmVkdWNlcihwcm9wcy5yZWR1Y2VyLCBpbml0U3RvcmUocHJvcHMucmVkdWNlcikpO1xuXG4gICAgX3N0b3JlID0gcmVkdWNlckRhdGFbU1RPUkVfRUxFTUVOVF07XG4gICAgX2Rpc3BhdGNoID0gcmVkdWNlckRhdGFbRElTUEFUQ0hfRUxFTUVOVF07XG4gICAgY29tcGFyZU9sZFZhbHVlV2l0aE5ldyhfc3RvcmUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWc1N0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cmVkdWNlckRhdGF9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1ZzU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuIl19