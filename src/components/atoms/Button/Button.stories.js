import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const primary = () => (
  <Button disabled={boolean('Nieaktywniość', false)}>{text('Wnętrzność', 'Primary')}</Button>
);
export const secondary = () => {
  const innerText = text('Tekst', 'Secondary');
  const amount = number('Liczba', 10);

  const content = `${innerText} ${amount}`;

  return <Button secondary>{content}</Button>;
};

export const selector = () => {
  const label = 'Colors';
  const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Primary {value}</Button>;
};
