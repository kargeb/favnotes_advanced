import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
};

export const cardPrimary = () => <Card />;
export const cardSecondary = () => <Card cardType="twitter" />;
export const cardTertiary = () => <Card cardType="article" />;
