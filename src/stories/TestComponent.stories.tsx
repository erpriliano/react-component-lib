import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestComponent } from '../components/TestComponent';

export default {
  title: 'Test Component',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = (
  args,
) => <TestComponent {...args} />;

export const TestComponentMain = Template.bind({});

TestComponentMain.args = {
  text: 'Some string',
};
