import { PlayerContextValueState } from 'react_store/PlayerContext';
import { CHANGE_VOLUME, CHANGE_MULTIPLY, CHANGE_UNION_BLOCKS } from 'react_store/actions';

export const reducer: React.Reducer<PlayerContextValueState, any> = (state, action) => {
  let newState = state;

  switch (action.type) {
    case CHANGE_VOLUME: {
      newState = {
        ...state,
        volume: action.payload.volume,
      };
      break;
    }
    case CHANGE_MULTIPLY: {
      newState = {
        ...state,
        multiply: action.payload.multiply,
      };
      break;
    }
    case CHANGE_UNION_BLOCKS: {
      newState = {
        ...state,
        unionBlocks: action.payload.unionBlocks,
      };
      break;
    }
    default:
      throw new Error();
  }

  console.info('NEW STATE', newState);
  localStorage.setItem('userData', JSON.stringify(newState));
  return newState;
};
