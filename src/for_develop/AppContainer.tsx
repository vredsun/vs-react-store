import * as React from 'react';

import { hot } from 'react-hot-loader/root';

import SomeForTest from 'for_develop/SomeForTest';
import createVsProvider from 'vs_react_store/createVsProvider';

import { reducer } from 'for_develop/reducer';

const VsStoreProvider = createVsProvider(reducer);

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
