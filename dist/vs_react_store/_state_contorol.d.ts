declare type Selector<V extends any, S extends Record<string, any>> = (store: S) => V;
export declare const setOfSelectors: Map<any, {
    selector: Selector<any, {}>;
    currentValue: any;
    setValuesMap: Map<Symbol, (value: any) => any>;
}>;
export declare const compareOldValueWithNew: <S extends Record<string, any>>(state: S) => void;
export declare const getSelectorValue: <V extends any, S extends Record<string, any>>(selector: Selector<V, S>) => V;
export declare const addSelectorToStack: <V extends any, S extends Record<string, any>>(key: Symbol, selector: Selector<V, S>, currentValue: V, setValue: (value: V) => any) => void;
export declare const removeSelectorToStack: <V extends any, S extends Record<string, any>>(key: Symbol, selector: Selector<V, S>) => void;
export declare const setDefaultValueToReducer: (reducer: any, default_value: any) => void;
export declare const initStore: (reducer: any) => any;
export {};
