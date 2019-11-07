import React from 'react';
import Button from 'components/atoms/Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Działam</h1>
          <Button>Close / save</Button>
          <Button secondary>secondary</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
