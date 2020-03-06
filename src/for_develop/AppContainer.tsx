import * as React from 'react';

import { hot } from 'react-hot-loader/root';

import SomeForTest from 'for_develop/SomeForTest';
import createVsProvider from 'vs_react_store/createVsProvider';

import { reducer, VsStoreContextValueState } from 'for_develop/reducer';

const default_value: VsStoreContextValueState = {
  volume: 0.5,
  multiply: 2,
  unionBlocks: 1,
};

const initStore = (): VsStoreContextValueState => {
  const userData: Partial<VsStoreContextValueState> = JSON.parse(localStorage.getItem('userData')) || {};

  return {
    volume: userData.volume ?? default_value.volume,
    multiply: userData.multiply ?? default_value.multiply,
    unionBlocks: userData.unionBlocks ?? default_value.unionBlocks,
  };
};

const VsStoreProvider = createVsProvider(reducer, default_value, initStore);

const App: React.FC<{}> = React.memo(
  () => {
    return (
      <VsStoreProvider>
        <SomeForTest />
      </VsStoreProvider>
    );
  },
);

export default hot(App);
