import React from 'react';
import Button from 'components/Button/Button';

function Root() {
  return (
    <>
      <h1>Działam</h1>
      <Button>Close / save</Button>
      <Button secondary>secondary</Button>
      <Button tertiary height="100px">
        tertiary
      </Button>
    </>
  );
}

export default Root;
