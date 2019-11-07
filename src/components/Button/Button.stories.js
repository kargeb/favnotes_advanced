import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const primary = () => <Button>primary</Button>;
export const secondary = () => <Button secondary>secondary</Button>;
export const both = () => (
  <div>
    <Button secondary>Secondary</Button>
    <Button>Primary button</Button>
  </div>
);
