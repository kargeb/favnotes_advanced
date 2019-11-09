import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  decorators: [StoryRouter()],
};

export const sidebar = () => <Sidebar />;
