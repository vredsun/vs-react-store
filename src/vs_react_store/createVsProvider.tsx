import * as React from 'react';
import { VsStoreProvider, VsStoreProviderProps } from './VsStoreContext';

const createVsProvider = (reducer: VsStoreProviderProps['reducer'], defaultValue: VsStoreProviderProps['defaultValue'], initStore: VsStoreProviderProps['initStore']): React.FC<{}> => {
  return (props) => (
    <VsStoreProvider
      reducer={reducer}
      defaultValue={defaultValue}
      initStore={initStore}
      children={props.children}
    />
  );
};

export default createVsProvider;
