"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _VsStoreContext = require("./VsStoreContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var createVsProvider = function createVsProvider(reducer) {
  return function (props) {
    return React.createElement(_VsStoreContext.VsStoreProvider, {
      reducer: reducer,
      children: props.children
    });
  };
};

var _default = createVsProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9jcmVhdGVWc1Byb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJjcmVhdGVWc1Byb3ZpZGVyIiwicmVkdWNlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQsRUFBNEQ7QUFDbkYsU0FBTyxVQUFDQyxLQUFEO0FBQUEsV0FDTCxvQkFBQywrQkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRCxPQURYO0FBRUUsTUFBQSxRQUFRLEVBQUVDLEtBQUssQ0FBQ0M7QUFGbEIsTUFESztBQUFBLEdBQVA7QUFNRCxDQVBEOztlQVNlSCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZzU3RvcmVQcm92aWRlciwgVnNTdG9yZVByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL1ZzU3RvcmVDb250ZXh0JztcblxuY29uc3QgY3JlYXRlVnNQcm92aWRlciA9IChyZWR1Y2VyOiBWc1N0b3JlUHJvdmlkZXJQcm9wc1sncmVkdWNlciddKTogUmVhY3QuRkM8e30+ID0+IHtcbiAgcmV0dXJuIChwcm9wcykgPT4gKFxuICAgIDxWc1N0b3JlUHJvdmlkZXJcbiAgICAgIHJlZHVjZXI9e3JlZHVjZXJ9XG4gICAgICBjaGlsZHJlbj17cHJvcHMuY2hpbGRyZW59XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZzUHJvdmlkZXI7XG4iXX0=