import { _store } from './VsStoreContext';

type Selector<V extends any, S extends Record<string, any>> = (store: S) => V;

export const setOfSelectors = new Map<any, {
  selector: Selector<any, {}>;
  currentValue: any;
  setValuesMap: Map<
    Symbol,
    (value: ReturnType<Selector<any, {}>>) => any
  >;
}>();

export const compareOldValueWithNew = <S extends Record<string, any>>(state: S) => {
  setOfSelectors.forEach((selectorState) => {
    const newValue = selectorState.selector(state);

    if (newValue !== selectorState.currentValue) {
      selectorState.currentValue = newValue;
      selectorState.setValuesMap.forEach((setValue) => {
        setValue(newValue);
      });
    }
  });
};

export const getSelectorValue = <V extends any, S extends Record<string, any>>(selector: Selector<V, S>) => {
  return selector(_store);
};

export const addSelectorToStack = <V extends any, S extends Record<string, any>>(key: Symbol, selector: Selector<V, S>, currentValue: V, setValue: (value: ReturnType<Selector<V, S>>) => any) => {
  if (!setOfSelectors.has(selector)) {
    const setValuesMap = new Map();
    setValuesMap.set(key, setValue);

    setOfSelectors.set(selector, {
      selector,
      currentValue,
      setValuesMap,
    });
  } else {
    setOfSelectors.get(selector).setValuesMap.set(key, setValue);
  }
};

export const removeSelectorToStack = <V extends any, S extends Record<string, any>>(key: Symbol, selector: Selector<V, S>) => {
  if (setOfSelectors.has(selector)) {
    setOfSelectors.get(selector).setValuesMap.delete(key);
    if (!setOfSelectors.get(selector).setValuesMap.size) {
      setOfSelectors.delete(selector);
    }
  }
};
