import React from 'react';

import PullScreen from './PullScreen';
import PullScreenImage from '../../containers/RiverRanchPullScreen/img/00_02-new.jpg';

export default {
  title: 'components/PullScreen',
  component: PullScreen,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <PullScreen {...args}></PullScreen>;

export const Default = Template.bind({});

Default.args = {
  children: (
    <img
      alt="River Ranch"
      src={PullScreenImage}
      height="100%"
      width="100%"
      style={{ objectFit: 'cover' }}
    />
  ),
};
