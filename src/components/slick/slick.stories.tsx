// slick.story.ts

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {SimpleSlider, MultipleItems, MultipleRows} from './slick';
import '../../App.css'; 

storiesOf('SLIDER/SLICK SLIDER', module)
	.addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
	.add('Simple With Markdown', () => <SimpleSlider />, {notes: { markdown: 'someMarkdownText' },})
	.add('MultipleItems', () => <MultipleItems />)
	.add('MultipleRows', () => <MultipleRows />);
