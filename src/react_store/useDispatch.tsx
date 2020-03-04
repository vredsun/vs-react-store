import { _dispatch } from 'react_store/VsStoreContext';

const useDispatch = () => {
  return _dispatch;
};

export default useDispatch;
