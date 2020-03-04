export type VsAction<P> = {
  type: string;
  payload: P;
};

export type Reducer<S, A extends VsAction<any>> = (
  state: S | undefined,
  action: A
) => S;

const createReducer = <StoreState>(
  handlers: Record<string, <A extends VsAction<any>>(state: StoreState, action: A) => StoreState>,
  handleChangeState?: (state: StoreState) => void,
): Reducer<StoreState, VsAction<any>> => {
  const reducer = (state: StoreState, action: VsAction<any>): StoreState => {
    let newState = state;
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

export default createReducer;
