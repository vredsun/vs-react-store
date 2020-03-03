import * as React from 'react';

import { reducer } from 'react_store/reducer';
import { compareOldValueWithNew } from 'react_store/hooks/_state_contorol';

export type PlayerContextValueState = {
  volume: number;
  multiply: number;
  unionBlocks: number;
};

export type PlayerContextValue = [
  PlayerContextValueState,
  React.Dispatch<any>
];

const default_value: PlayerContextValueState = {
  volume: 0.5,
  multiply: 2,
  unionBlocks: 1,
};

export const PlayerContext = React.createContext<PlayerContextValue>(
  [
    default_value,
    () => {/* */},
  ],
);

const initStore = (): PlayerContextValueState => {
  const userData: Partial<PlayerContextValueState> = JSON.parse(localStorage.getItem('userData')) || {};

  return {
    volume: userData.volume ?? default_value.volume,
    multiply: userData.multiply ?? default_value.multiply,
    unionBlocks: userData.unionBlocks ?? default_value.unionBlocks,
  };
};

export let _store: PlayerContextValueState = {
  ...default_value,
};

export let _dispatch: React.Dispatch<any> = () => {
  throw new Error('use VsStoreProvider');
  //
};

export const VsStoreProvider: React.FC<{}> = React.memo(
  (props) => {
    const reducerData = React.useReducer(reducer, default_value, initStore);
    _store = reducerData[0];
    _dispatch = reducerData[1];
    compareOldValueWithNew(_store);

    return (
      <PlayerContext.Provider value={reducerData}>
        {props.children}
      </PlayerContext.Provider>
    );
  },
);
