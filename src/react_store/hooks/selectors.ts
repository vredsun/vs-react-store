import { PlayerContextValueState } from 'react_store/PlayerContext';

export const selectVolume = (state: PlayerContextValueState) => {
  return state.volume;
};

export const selectMultiply = (state: PlayerContextValueState) => {
  return state.multiply;
};

export const selectUnionBlocks = (state: PlayerContextValueState) => {
  return state.unionBlocks;
};
