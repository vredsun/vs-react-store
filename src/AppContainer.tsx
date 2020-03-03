import * as React from 'react';

import { hot } from 'react-hot-loader/root';

import SomeForTest from 'SomeForTest';
import { VsStoreProvider } from 'react_store/PlayerContext';

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
