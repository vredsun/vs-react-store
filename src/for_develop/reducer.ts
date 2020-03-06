import { CHANGE_VOLUME, CHANGE_MULTIPLY, CHANGE_UNION_BLOCKS, changeVolume, changeMultiply, changeUnionBlocks } from 'for_develop/actions';
import { createReducer } from 'vs_react_store';

export type VsStoreContextValueState = {
  volume: number;
  multiply: number;
  unionBlocks: number;
};

export const reducer = createReducer<VsStoreContextValueState>(
  {
    [CHANGE_VOLUME](state, { payload }: ReturnType<typeof changeVolume>) {
      return {
        ...state,
        volume: payload.volume,
      };
    },
    [CHANGE_MULTIPLY](state, { payload }: ReturnType<typeof changeMultiply>) {
      return {
        ...state,
        multiply: payload.multiply,
      };
    },
    [CHANGE_UNION_BLOCKS](state, { payload }: ReturnType<typeof changeUnionBlocks>) {
      return {
        ...state,
        unionBlocks: payload.unionBlocks,
      };
    },
  },
  (state) => {
    console.info('NEW STATE', state);
    localStorage.setItem('userData', JSON.stringify(state));
  },
);
