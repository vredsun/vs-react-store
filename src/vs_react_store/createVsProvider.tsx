import * as React from 'react';
import { VsStoreProvider, VsStoreProviderProps } from './VsStoreContext';

const createVsProvider = (reducer: VsStoreProviderProps['reducer']): React.FC<{}> => {
  return (props) => (
    <VsStoreProvider
      reducer={reducer}
      children={props.children}
    />
  );
};

export default createVsProvider;
