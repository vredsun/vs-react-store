import * as React from 'react';
import useSelector from 'react_store/useSelector';
import { selectVolume } from 'for_develop/selectors';
import useDispatch from 'react_store/useDispatch';
import { changeMultiply, changeVolume } from 'for_develop/actions';

type Props = {};

const SomeForTest: React.FC<Props> = React.memo(
  (props) => {
    const volume = useSelector(selectVolume);
    const dispatch = useDispatch();

    React.useEffect(
      () => {
        setTimeout(
          () => {
            dispatch(changeMultiply(4));
            setTimeout(
              () => {
                dispatch(changeVolume(4));
              },
              2000,
            );
          },
          2000,
        );
      },
      [],
    );

    console.info({ volume });
    return (
      <div>SomeForTest</div>
    );
  },
);

export default SomeForTest;
