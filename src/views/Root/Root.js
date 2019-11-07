import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <h1>Działam</h1>
      <Button>Close / save</Button>
      <Button secondary>secondary</Button>
    </div>
  );
}

export default Root;
