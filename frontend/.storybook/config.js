import { configure } from '@storybook/react';

function Storybook() {
  require('../src/storybook/stories.js');
}

configure(Storybook, module);
