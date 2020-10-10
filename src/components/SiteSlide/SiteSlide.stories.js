import React from 'react';
import SiteSlide from './SiteSlide';
import SiteThumbnail from '../../containers/RiverRanchSiteSlide/img/02.png';

export default {
  title: 'components/SiteSlide',
  component: SiteSlide,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <SiteSlide {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 0,
  thumbnail: SiteThumbnail,
  name: 'My Site',
};
