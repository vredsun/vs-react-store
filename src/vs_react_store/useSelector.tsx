import * as React from 'react';
import { getSelectorValue, addSelectorToStack, removeSelectorToStack } from './_state_contorol';

const useSelector = <V extends any, S extends Record<string, any>>(selector: (state: S) => V) => {
  const [value, setValue] = React.useState<V>(() => getSelectorValue(selector));

  React.useEffect(
    () => {
      const key = Symbol(selector.name);
      addSelectorToStack(key, selector, value, setValue);

      return () => {
        removeSelectorToStack(key, selector);
      };
    },
    [selector],
  );
  return value;
};

export default useSelector;
