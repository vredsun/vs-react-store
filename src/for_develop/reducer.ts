import { CHANGE_VOLUME, CHANGE_MULTIPLY, CHANGE_UNION_BLOCKS, changeVolume, changeMultiply, changeUnionBlocks } from 'for_develop/actions';
import { createReducer } from 'vs_react_store';

export type VsStoreContextValueState = {
  volume: number;
  multiply: number;
  unionBlocks: number;
};

const default_value: VsStoreContextValueState = {
  volume: 0.5,
  multiply: 2,
  unionBlocks: 1,
};

export const reducer = createReducer<VsStoreContextValueState>(
  () => {
    const userData: Partial<VsStoreContextValueState> = JSON.parse(localStorage.getItem('userData')) || {};

    return {
      volume: userData.volume ?? default_value.volume,
      multiply: userData.multiply ?? default_value.multiply,
      unionBlocks: userData.unionBlocks ?? default_value.unionBlocks,
    };
  },
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
