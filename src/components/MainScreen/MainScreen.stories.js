import React from 'react';
import MainScreen from './MainScreen';
import RiverRanchMainScreen from '../../containers/RiverRanchMainScreen/img/01_02-new.jpg';

export default {
  title: 'components/MainScreen',
  component: MainScreen,
};

const Template = args => <MainScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <img
      src={RiverRanchMainScreen}
      alt="River Ranch"
      width="100%"
      height="100%"
      style={{ objectFit: 'cover' }}
    />
  ),
};
