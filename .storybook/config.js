import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
