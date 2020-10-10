import React from 'react';

import SiteCarousel from './SiteCarousel';
import image1 from '../../containers/RiverRanchSiteSlide/img/02.png';
import image2 from '../../containers/RiverRanchSiteSlide/img/03.png';
import image3 from '../../containers/RiverRanchSiteSlide/img/04.png';
import image4 from '../../containers/RiverRanchSiteSlide/img/05.png';
import image5 from '../../containers/RiverRanchSiteSlide/img/06.png';

export default {
  title: 'components/SiteCarousel',
  component: SiteCarousel,
  argTypes: { siteTapped: { action: 'tapped' }, siteChanged: { action: 'changed' } },
};

const Template = args => <SiteCarousel {...args}></SiteCarousel>;

export const Default = Template.bind({});

Default.args = {
  sites: [
    { id: 0, thumbnail: image1, name: 'Image 1', detailsSrc: 'mydetails' },
    { id: 1, thumbnail: image2, name: 'Image 2', detailsSrc: 'mydetails' },
    { id: 2, thumbnail: image3, name: 'Image 3', detailsSrc: 'mydetails' },
    { id: 3, thumbnail: image4, name: 'Image 4', detailsSrc: 'mydetails' },
    { id: 4, thumbnail: image5, name: 'Image 5', detailsSrc: 'mydetails' },
  ],
};
