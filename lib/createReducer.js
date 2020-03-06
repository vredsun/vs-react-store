"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state_contorol = require("./_state_contorol");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var createReducer = function createReducer(initStore, handlers, handleChangeState) {
  var reducer = function reducer(state, action) {
    var newState = state;

    if (handlers.hasOwnProperty(action === null || action === void 0 ? void 0 : action.type)) {
      newState = handlers[action.type](state, action);

      if (handleChangeState) {
        handleChangeState(newState);
      }
    }

    return newState;
  };

  (0, _state_contorol.setDefaultValueToReducer)(reducer, initStore());
  return reducer;
};

var _default = createReducer;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createReducer, "createReducer", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/createReducer.ts");
  reactHotLoader.register(_default, "default", "/Users/vladimirleshchev/Desktop/github/vs-react-store/src/vs_react_store/createReducer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9jcmVhdGVSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJpbml0U3RvcmUiLCJoYW5kbGVycyIsImhhbmRsZUNoYW5nZVN0YXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxTQURvQixFQUVwQkMsUUFGb0IsRUFHcEJDLGlCQUhvQixFQUltQjtBQUN2QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQW9CQyxNQUFwQixFQUEwRDtBQUN4RSxRQUFJQyxRQUFRLEdBQUdGLEtBQWY7O0FBRUEsUUFBSUgsUUFBUSxDQUFDTSxjQUFULENBQXdCRixNQUF4QixhQUF3QkEsTUFBeEIsdUJBQXdCQSxNQUFNLENBQUVHLElBQWhDLENBQUosRUFBMkM7QUFDekNGLE1BQUFBLFFBQVEsR0FBR0wsUUFBUSxDQUFDSSxNQUFNLENBQUNHLElBQVIsQ0FBUixDQUFzQkosS0FBdEIsRUFBNkJDLE1BQTdCLENBQVg7O0FBRUEsVUFBSUgsaUJBQUosRUFBdUI7QUFDckJBLFFBQUFBLGlCQUFpQixDQUFDSSxRQUFELENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0FaRDs7QUFjQSxnREFBeUJILE9BQXpCLEVBQWtDSCxTQUFTLEVBQTNDO0FBRUEsU0FBT0csT0FBUDtBQUNELENBdEJEOztlQXdCZUosYTs7Ozs7Ozs7Ozs7OzBCQXhCVEEsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldERlZmF1bHRWYWx1ZVRvUmVkdWNlciB9IGZyb20gJy4vX3N0YXRlX2NvbnRvcm9sJztcblxuZXhwb3J0IHR5cGUgVnNBY3Rpb248UD4gPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogUDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZHVjZXI8UywgQSBleHRlbmRzIFZzQWN0aW9uPGFueT4+ID0gKFxuICBzdGF0ZTogUyB8IHVuZGVmaW5lZCxcbiAgYWN0aW9uOiBBXG4pID0+IFM7XG5cbmNvbnN0IGNyZWF0ZVJlZHVjZXIgPSA8U3RvcmVTdGF0ZSBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICBpbml0U3RvcmU6ICgpID0+IFN0b3JlU3RhdGUsXG4gIGhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCA8QSBleHRlbmRzIFZzQWN0aW9uPGFueT4+KHN0YXRlOiBTdG9yZVN0YXRlLCBhY3Rpb246IEEpID0+IFN0b3JlU3RhdGU+LFxuICBoYW5kbGVDaGFuZ2VTdGF0ZT86IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gdm9pZCxcbik6IFJlZHVjZXI8U3RvcmVTdGF0ZSwgVnNBY3Rpb248YW55Pj4gPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdG9yZVN0YXRlLCBhY3Rpb246IFZzQWN0aW9uPGFueT4pOiBTdG9yZVN0YXRlID0+IHtcbiAgICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcblxuICAgIGlmIChoYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShhY3Rpb24/LnR5cGUpKSB7XG4gICAgICBuZXdTdGF0ZSA9IGhhbmRsZXJzW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKGhhbmRsZUNoYW5nZVN0YXRlKSB7XG4gICAgICAgIGhhbmRsZUNoYW5nZVN0YXRlKG5ld1N0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbiAgc2V0RGVmYXVsdFZhbHVlVG9SZWR1Y2VyKHJlZHVjZXIsIGluaXRTdG9yZSgpKTtcblxuICByZXR1cm4gcmVkdWNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXI7XG4iXX0=