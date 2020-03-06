"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _state_contorol = require("./_state_contorol");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var useSelector = function useSelector(selector) {
  var _React$useState = React.useState(function () {
    return (0, _state_contorol.getSelectorValue)(selector);
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    var key = Symbol(selector.name);
    (0, _state_contorol.addSelectorToStack)(key, selector, value, setValue);
    return function () {
      (0, _state_contorol.removeSelectorToStack)(key, selector);
    };
  }, [selector]);
  return value;
};

__signature__(useSelector, "useState{[value, setValue](() => getSelectorValue(selector))}\nuseEffect{}");

var _default = useSelector;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useSelector, "useSelector", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/useSelector.tsx");
  reactHotLoader.register(_default, "default", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/useSelector.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS91c2VTZWxlY3Rvci50c3giXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJzZWxlY3RvciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlRWZmZWN0Iiwia2V5IiwiU3ltYm9sIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBK0NDLFFBQS9DLEVBQTZFO0FBQUEsd0JBQ3JFQyxLQUFLLENBQUNDLFFBQU4sQ0FBa0I7QUFBQSxXQUFNLHNDQUFpQkYsUUFBakIsQ0FBTjtBQUFBLEdBQWxCLENBRHFFO0FBQUE7QUFBQSxNQUN4RkcsS0FEd0Y7QUFBQSxNQUNqRkMsUUFEaUY7O0FBRy9GSCxFQUFBQSxLQUFLLENBQUNJLFNBQU4sQ0FDRSxZQUFNO0FBQ0osUUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNQLFFBQVEsQ0FBQ1EsSUFBVixDQUFsQjtBQUNBLDRDQUFtQkYsR0FBbkIsRUFBd0JOLFFBQXhCLEVBQWtDRyxLQUFsQyxFQUF5Q0MsUUFBekM7QUFFQSxXQUFPLFlBQU07QUFDWCxpREFBc0JFLEdBQXRCLEVBQTJCTixRQUEzQjtBQUNELEtBRkQ7QUFHRCxHQVJILEVBU0UsQ0FBQ0EsUUFBRCxDQVRGO0FBV0EsU0FBT0csS0FBUDtBQUNELENBZkQ7O2NBQU1KLFc7O2VBaUJTQSxXOzs7Ozs7Ozs7Ozs7MEJBakJUQSxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0U2VsZWN0b3JWYWx1ZSwgYWRkU2VsZWN0b3JUb1N0YWNrLCByZW1vdmVTZWxlY3RvclRvU3RhY2sgfSBmcm9tICcuL19zdGF0ZV9jb250b3JvbCc7XG5cbmNvbnN0IHVzZVNlbGVjdG9yID0gPFYgZXh0ZW5kcyBhbnksIFMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihzZWxlY3RvcjogKHN0YXRlOiBTKSA9PiBWKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8Vj4oKCkgPT4gZ2V0U2VsZWN0b3JWYWx1ZShzZWxlY3RvcikpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBTeW1ib2woc2VsZWN0b3IubmFtZSk7XG4gICAgICBhZGRTZWxlY3RvclRvU3RhY2soa2V5LCBzZWxlY3RvciwgdmFsdWUsIHNldFZhbHVlKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgcmVtb3ZlU2VsZWN0b3JUb1N0YWNrKGtleSwgc2VsZWN0b3IpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIFtzZWxlY3Rvcl0sXG4gICk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlbGVjdG9yO1xuIl19