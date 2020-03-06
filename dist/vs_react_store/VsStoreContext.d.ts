import * as React from 'react';
declare type VsStoreContextValueState = Record<string, any>;
export declare let _store: any;
export declare let _dispatch: React.Dispatch<any>;
export declare type VsStoreProviderProps = {
    reducer: React.Reducer<VsStoreContextValueState, any>;
};
export declare const VsStoreProvider: React.FC<VsStoreProviderProps>;
export {};
