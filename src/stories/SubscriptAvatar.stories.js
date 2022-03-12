import React from 'react';
import SubscriptAvatar from '../components/SubscriptAvatar';
import * as Expensicons from '../components/Icon/Expensicons';

/**
 * We use the Component Story Format for writing stories. Follow the docs here:
 *
 * https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
 */
export default {
    title: 'Components/SubscriptAvatar',
    component: SubscriptAvatar,
    args: {
        mainAvatar: Expensicons.Profile,
        secondaryAvatar: Expensicons.Workspace,
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <SubscriptAvatar {...args} />;

// Arguments can be passed to the component by binding
// See: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Default = Template.bind({});

export {
    Default,
};
