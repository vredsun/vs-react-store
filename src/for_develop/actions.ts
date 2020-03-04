import { VsStoreContextValueState } from 'for_develop/reducer';

export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const CHANGE_MULTIPLY = 'CHANGE_MULTIPLY';
export const CHANGE_UNION_BLOCKS = 'CHANGE_UNION_BLOCKS';

export const changeVolume = (volume: VsStoreContextValueState['volume']) => ({
  type: CHANGE_VOLUME,
  payload: {
    volume,
  },
});

export const changeMultiply = (multiply: VsStoreContextValueState['multiply']) => ({
  type: CHANGE_MULTIPLY,
  payload: {
    multiply,
  },
});

export const changeUnionBlocks = (unionBlocks: VsStoreContextValueState['unionBlocks']) => ({
  type: CHANGE_UNION_BLOCKS,
  payload: {
    unionBlocks,
  },
});

