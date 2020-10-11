import React, { useState } from 'react';

import SiteCarousel from './SiteCarousel';
import image1 from '../../containers/RiverRanchSiteSlide/img/02.png';
import image2 from '../../containers/RiverRanchSiteSlide/img/03.png';
import image3 from '../../containers/RiverRanchSiteSlide/img/04.png';
import image4 from '../../containers/RiverRanchSiteSlide/img/05.png';
import image5 from '../../containers/RiverRanchSiteSlide/img/06.png';
import image6 from '../../containers/RiverRanchSiteSlide/img/07.png';
import image7 from '../../containers/RiverRanchSiteSlide/img/08.png';
import image8 from '../../containers/RiverRanchSiteSlide/img/09.png';
import image9 from '../../containers/RiverRanchSiteSlide/img/10.png';
import image10 from '../../containers/RiverRanchSiteSlide/img/11.png';
import image11 from '../../containers/RiverRanchSiteSlide/img/12.png';
import image12 from '../../containers/RiverRanchSiteSlide/img/13.png';
import image13 from '../../containers/RiverRanchSiteSlide/img/14.png';
import image14 from '../../containers/RiverRanchSiteSlide/img/15.png';
import image15 from '../../containers/RiverRanchSiteSlide/img/16.png';
import image16 from '../../containers/RiverRanchSiteSlide/img/17.png';

export default {
  title: 'components/SiteCarousel',
  component: SiteCarousel,
  argTypes: { siteTapped: { action: 'tapped' }, siteChanged: { action: 'changed' } },
};

const Template = args => {
  const [selectedSiteIndex, setSelectedSiteIndex] = useState(args.selectedSiteIndex);
  // need to keep track of the currently selected site above the SiteCarousel
  const handleSiteChanged = (oldSite, newSite) => {
    setSelectedSiteIndex(newSite);
    args.siteChanged(oldSite, newSite);
  };
  return (
    <SiteCarousel
      {...args}
      selectedSiteIndex={selectedSiteIndex}
      showArrows
      siteChanged={handleSiteChanged}></SiteCarousel>
  );
};

export const Default = Template.bind({});

Default.args = {
  selectedSiteIndex: 0,
  sites: [
    { id: 0, thumbnail: image1, name: 'Image 1', detailsSrc: 'mydetails' },
    { id: 1, thumbnail: image2, name: 'Image 2', detailsSrc: 'mydetails' },
    { id: 2, thumbnail: image3, name: 'Image 3', detailsSrc: 'mydetails' },
    { id: 3, thumbnail: image4, name: 'Image 4', detailsSrc: 'mydetails' },
    { id: 4, thumbnail: image5, name: 'Image 5', detailsSrc: 'mydetails' },
    { id: 5, thumbnail: image6, name: 'Image 6', detailsSrc: 'mydetails' },
    { id: 6, thumbnail: image7, name: 'Image 7', detailsSrc: 'mydetails' },
    { id: 7, thumbnail: image8, name: 'Image 8', detailsSrc: 'mydetails' },
    { id: 8, thumbnail: image9, name: 'Image 9', detailsSrc: 'mydetails' },
    { id: 9, thumbnail: image10, name: 'Image 10', detailsSrc: 'mydetails' },
    { id: 10, thumbnail: image11, name: 'Image 11', detailsSrc: 'mydetails' },
    { id: 11, thumbnail: image12, name: 'Image 12', detailsSrc: 'mydetails' },
    { id: 12, thumbnail: image13, name: 'Image 13', detailsSrc: 'mydetails' },
    { id: 13, thumbnail: image14, name: 'Image 14', detailsSrc: 'mydetails' },
    { id: 14, thumbnail: image15, name: 'Image 15', detailsSrc: 'mydetails' },
    { id: 15, thumbnail: image16, name: 'Image 16', detailsSrc: 'mydetails' },
  ],
};
