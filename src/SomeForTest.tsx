import * as React from 'react';

type Props = {};

const SomeForTest: React.FC<Props> = React.memo(
  (props) => {

    return (
      <div>SomeForTest</div>
    );
  },
);

export default SomeForTest;
