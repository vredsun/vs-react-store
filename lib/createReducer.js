"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state_contorol = require("vs_react_store/_state_contorol");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9jcmVhdGVSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJpbml0U3RvcmUiLCJoYW5kbGVycyIsImhhbmRsZUNoYW5nZVN0YXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxTQURvQixFQUVwQkMsUUFGb0IsRUFHcEJDLGlCQUhvQixFQUltQjtBQUN2QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQW9CQyxNQUFwQixFQUEwRDtBQUN4RSxRQUFJQyxRQUFRLEdBQUdGLEtBQWY7O0FBRUEsUUFBSUgsUUFBUSxDQUFDTSxjQUFULENBQXdCRixNQUF4QixhQUF3QkEsTUFBeEIsdUJBQXdCQSxNQUFNLENBQUVHLElBQWhDLENBQUosRUFBMkM7QUFDekNGLE1BQUFBLFFBQVEsR0FBR0wsUUFBUSxDQUFDSSxNQUFNLENBQUNHLElBQVIsQ0FBUixDQUFzQkosS0FBdEIsRUFBNkJDLE1BQTdCLENBQVg7O0FBRUEsVUFBSUgsaUJBQUosRUFBdUI7QUFDckJBLFFBQUFBLGlCQUFpQixDQUFDSSxRQUFELENBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0FaRDs7QUFjQSxnREFBeUJILE9BQXpCLEVBQWtDSCxTQUFTLEVBQTNDO0FBRUEsU0FBT0csT0FBUDtBQUNELENBdEJEOztlQXdCZUosYTs7Ozs7Ozs7Ozs7OzBCQXhCVEEsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldERlZmF1bHRWYWx1ZVRvUmVkdWNlciB9IGZyb20gJ3ZzX3JlYWN0X3N0b3JlL19zdGF0ZV9jb250b3JvbCc7XG5cbmV4cG9ydCB0eXBlIFZzQWN0aW9uPFA+ID0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IFA7XG59O1xuXG5leHBvcnQgdHlwZSBSZWR1Y2VyPFMsIEEgZXh0ZW5kcyBWc0FjdGlvbjxhbnk+PiA9IChcbiAgc3RhdGU6IFMgfCB1bmRlZmluZWQsXG4gIGFjdGlvbjogQVxuKSA9PiBTO1xuXG5jb25zdCBjcmVhdGVSZWR1Y2VyID0gPFN0b3JlU3RhdGUgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihcbiAgaW5pdFN0b3JlOiAoKSA9PiBTdG9yZVN0YXRlLFxuICBoYW5kbGVyczogUmVjb3JkPHN0cmluZywgPEEgZXh0ZW5kcyBWc0FjdGlvbjxhbnk+PihzdGF0ZTogU3RvcmVTdGF0ZSwgYWN0aW9uOiBBKSA9PiBTdG9yZVN0YXRlPixcbiAgaGFuZGxlQ2hhbmdlU3RhdGU/OiAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHZvaWQsXG4pOiBSZWR1Y2VyPFN0b3JlU3RhdGUsIFZzQWN0aW9uPGFueT4+ID0+IHtcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogU3RvcmVTdGF0ZSwgYWN0aW9uOiBWc0FjdGlvbjxhbnk+KTogU3RvcmVTdGF0ZSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgICBpZiAoaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoYWN0aW9uPy50eXBlKSkge1xuICAgICAgbmV3U3RhdGUgPSBoYW5kbGVyc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChoYW5kbGVDaGFuZ2VTdGF0ZSkge1xuICAgICAgICBoYW5kbGVDaGFuZ2VTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG4gIHNldERlZmF1bHRWYWx1ZVRvUmVkdWNlcihyZWR1Y2VyLCBpbml0U3RvcmUoKSk7XG5cbiAgcmV0dXJuIHJlZHVjZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyO1xuIl19