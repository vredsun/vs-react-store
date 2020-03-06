"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var createReducer = function createReducer(handlers, handleChangeState) {
  var reducer = function reducer(state, action) {
    var newState = state;

    if (handlers.hasOwnProperty(action.type)) {
      newState = handlers[action.type](state, action);

      if (handleChangeState) {
        handleChangeState(newState);
      }
    }

    return newState;
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92c19yZWFjdF9zdG9yZS9jcmVhdGVSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZXIiLCJoYW5kbGVycyIsImhhbmRsZUNoYW5nZVN0YXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxRQURvQixFQUVwQkMsaUJBRm9CLEVBR21CO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBb0JDLE1BQXBCLEVBQTBEO0FBQ3hFLFFBQUlDLFFBQVEsR0FBR0YsS0FBZjs7QUFDQSxRQUFJSCxRQUFRLENBQUNNLGNBQVQsQ0FBd0JGLE1BQU0sQ0FBQ0csSUFBL0IsQ0FBSixFQUEwQztBQUN4Q0YsTUFBQUEsUUFBUSxHQUFHTCxRQUFRLENBQUNJLE1BQU0sQ0FBQ0csSUFBUixDQUFSLENBQXNCSixLQUF0QixFQUE2QkMsTUFBN0IsQ0FBWDs7QUFFQSxVQUFJSCxpQkFBSixFQUF1QjtBQUNyQkEsUUFBQUEsaUJBQWlCLENBQUNJLFFBQUQsQ0FBakI7QUFDRDtBQUNGOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQVhEOztBQWFBLFNBQU9ILE9BQVA7QUFDRCxDQWxCRDs7ZUFvQmVILGE7Ozs7Ozs7Ozs7OzswQkFwQlRBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBWc0FjdGlvbjxQPiA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkOiBQO1xufTtcblxuZXhwb3J0IHR5cGUgUmVkdWNlcjxTLCBBIGV4dGVuZHMgVnNBY3Rpb248YW55Pj4gPSAoXG4gIHN0YXRlOiBTIHwgdW5kZWZpbmVkLFxuICBhY3Rpb246IEFcbikgPT4gUztcblxuY29uc3QgY3JlYXRlUmVkdWNlciA9IDxTdG9yZVN0YXRlPihcbiAgaGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIDxBIGV4dGVuZHMgVnNBY3Rpb248YW55Pj4oc3RhdGU6IFN0b3JlU3RhdGUsIGFjdGlvbjogQSkgPT4gU3RvcmVTdGF0ZT4sXG4gIGhhbmRsZUNoYW5nZVN0YXRlPzogKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiB2b2lkLFxuKTogUmVkdWNlcjxTdG9yZVN0YXRlLCBWc0FjdGlvbjxhbnk+PiA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFN0b3JlU3RhdGUsIGFjdGlvbjogVnNBY3Rpb248YW55Pik6IFN0b3JlU3RhdGUgPT4ge1xuICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChoYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShhY3Rpb24udHlwZSkpIHtcbiAgICAgIG5ld1N0YXRlID0gaGFuZGxlcnNbYWN0aW9uLnR5cGVdKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICBpZiAoaGFuZGxlQ2hhbmdlU3RhdGUpIHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlU3RhdGUobmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuICByZXR1cm4gcmVkdWNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXI7XG4iXX0=