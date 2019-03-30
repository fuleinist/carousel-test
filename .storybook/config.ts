import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);