import { PlayerContextValueState } from 'react_store/PlayerContext';

export const CHANGE_VOLUME = 'CHANGE_VOLUME' as const;
export const CHANGE_MULTIPLY = 'CHANGE_MULTIPLY' as const;
export const CHANGE_UNION_BLOCKS = 'CHANGE_UNION_BLOCKS' as const;

export const changeVolume = (volume: PlayerContextValueState['volume']) => ({
  type: CHANGE_VOLUME,
  payload: {
    volume,
  },
});

export const changeMultiply = (multiply: PlayerContextValueState['multiply']) => ({
  type: CHANGE_MULTIPLY,
  payload: {
    multiply,
  },
});

export const changeUnionBlocks = (unionBlocks: PlayerContextValueState['unionBlocks']) => ({
  type: CHANGE_UNION_BLOCKS,
  payload: {
    unionBlocks,
  },
});

