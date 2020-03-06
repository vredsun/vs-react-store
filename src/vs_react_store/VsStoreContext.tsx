import * as React from 'react';

import { compareOldValueWithNew } from './_state_contorol';

type VsStoreContextValueState = Record<string, any>;

const VsStoreContext = React.createContext<any>(
  [
    {},
    () => {/* */},
  ],
);

export let _store: any = {};
export let _dispatch: React.Dispatch<any> = () => {
  throw new Error('use VsStoreProvider');
  //
};

export type VsStoreProviderProps = {
  reducer: React.Reducer<VsStoreContextValueState, any>;
  defaultValue: VsStoreContextValueState;
  initStore: (store: VsStoreContextValueState) => VsStoreContextValueState;
};

const STORE_ELEMENT = 0;
const DISPATCH_ELEMENT = 1;

export const VsStoreProvider: React.FC<VsStoreProviderProps> = React.memo(
  (props) => {
    const reducerData = React.useReducer(props.reducer, props.defaultValue, props.initStore);

    _store = reducerData[STORE_ELEMENT];
    _dispatch = reducerData[DISPATCH_ELEMENT];
    compareOldValueWithNew(_store);

    return (
      <VsStoreContext.Provider value={reducerData}>
        {props.children}
      </VsStoreContext.Provider>
    );
  },
);
