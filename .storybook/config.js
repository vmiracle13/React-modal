import { configure } from '@storybook/react';
import 'storybook-addon-material-ui';

function loadStories() {
    require('./stories/index.js');
}

configure(loadStories, module);
