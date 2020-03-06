export declare type VsAction<P> = {
    type: string;
    payload: P;
};
export declare type Reducer<S, A extends VsAction<any>> = (state: S | undefined, action: A) => S;
declare const createReducer: <StoreState extends Record<string, any>>(initStore: () => StoreState, handlers: Record<string, <A extends VsAction<any>>(state: StoreState, action: A) => StoreState>, handleChangeState?: (state: StoreState) => void) => Reducer<StoreState, VsAction<any>>;
export default createReducer;
