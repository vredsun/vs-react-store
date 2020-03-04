import { VsStoreContextValueState } from 'for_develop/reducer';

export const selectVolume = (state: VsStoreContextValueState) => {
  return state.volume;
};

export const selectMultiply = (state: VsStoreContextValueState) => {
  return state.multiply;
};

export const selectUnionBlocks = (state: VsStoreContextValueState) => {
  return state.unionBlocks;
};
