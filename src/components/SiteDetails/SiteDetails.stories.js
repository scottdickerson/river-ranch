import React from 'react';

import SiteDetails from './SiteDetails';
import SiteDetailsImage from '../../containers/RiverRanchSiteDetails/img/02_02.jpg';

export default {
  title: 'components/SiteDetails',
  component: SiteDetails,
  argTypes: {
    onCloseSite: { action: 'closed' },
    onNextSite: { action: 'next' },
    onPreviousSite: { action: 'previous' },
  },
};

const Template = args => <SiteDetails {...args}></SiteDetails>;

export const Default = Template.bind({});

Default.args = {
  content: (
    <img
      alt="River Ranch"
      src={SiteDetailsImage}
      height="100%"
      width="100%"
      style={{ objectFit: 'cover' }}
    />
  ),
  isOpen: true,
};
