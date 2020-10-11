import React from 'react';
import { ROUTES } from '../../constants/constants';
import MainScreen from '../../components/MainScreen/MainScreen';
import SiteCarousel from '../../components/SiteCarousel/SiteCarousel';
import RiverRanchMainImage from './img/01_02-new.jpg';
import { withRouter } from 'react-router';
import styles from '../RiverRanchPullScreen/RiverRanchPullScreen.module.css';

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

import details2 from '../../containers/RiverRanchSiteDetails/img/02_02.jpg';
import details3 from '../../containers/RiverRanchSiteDetails/img/03_02.jpg';
import details4 from '../../containers/RiverRanchSiteDetails/img/04_02.jpg';
import details5 from '../../containers/RiverRanchSiteDetails/img/05_02-new.jpg';
import details6 from '../../containers/RiverRanchSiteDetails/img/06_02.jpg';
import details7 from '../../containers/RiverRanchSiteDetails/img/07_02.jpg';
import details8 from '../../containers/RiverRanchSiteDetails/img/08_02.jpg';
import details9 from '../../containers/RiverRanchSiteDetails/img/09_02.jpg';
import details10 from '../../containers/RiverRanchSiteDetails/img/10_02.jpg';
import details11 from '../../containers/RiverRanchSiteDetails/img/11_02.jpg';
import details12 from '../../containers/RiverRanchSiteDetails/img/12_02.jpg';
import details13 from '../../containers/RiverRanchSiteDetails/img/13_02.jpg';
import details14 from '../../containers/RiverRanchSiteDetails/img/14_02.jpg';
import details15 from '../../containers/RiverRanchSiteDetails/img/15_02.jpg';
import details16 from '../../containers/RiverRanchSiteDetails/img/16_02.jpg';
import details17 from '../../containers/RiverRanchSiteDetails/img/17_02-new.jpg';

export const sites = [
  { id: 0, thumbnail: image1, name: 'Native Texas', detailsSrc: details2 },
  { id: 1, thumbnail: image2, name: 'Early Roads', detailsSrc: details3 },
  { id: 2, thumbnail: image3, name: 'Contact and Conflict', detailsSrc: details4 },
  { id: 3, thumbnail: image4, name: 'Bryson Family', detailsSrc: details5 },
  { id: 4, thumbnail: image5, name: 'Noble Bryson', detailsSrc: details6 },
  { id: 5, thumbnail: image6, name: 'Bryson Ranch', detailsSrc: details7 },
  { id: 6, thumbnail: image7, name: 'Rock Walls', detailsSrc: details8 },
  { id: 7, thumbnail: image8, name: 'Bryson Mill', detailsSrc: details9 },
  { id: 8, thumbnail: image9, name: 'Liberty Hill', detailsSrc: details10 },
  { id: 9, thumbnail: image10, name: 'Cattle Drives', detailsSrc: details11 },
  { id: 10, thumbnail: image11, name: 'Camp Meetings', detailsSrc: details12 },
  { id: 11, thumbnail: image12, name: 'Freedom Colonies', detailsSrc: details13 },
  { id: 12, thumbnail: image13, name: 'Swimming Holes', detailsSrc: details14 },
  { id: 13, thumbnail: image14, name: 'Cedar Fever', detailsSrc: details15 },
  { id: 14, thumbnail: image15, name: 'Growing Pains', detailsSrc: details16 },
  { id: 15, thumbnail: image16, name: 'Creating a Park', detailsSrc: details17 },
];

const RiverRanchMainScreen = ({
  history,
  match: {
    params: { id },
  },
  selectedSiteIndex,
  setSelectedSiteIndex,
}) => {
  const handleSiteChanged = (oldSite, newSite) => {
    setSelectedSiteIndex(newSite);
  };
  const handleSiteTapped = site => {
    history.push(ROUTES.DETAILS.replace(':id', site?.id));
  };

  return (
    // main screen remembers its selected state but doesn't render if an id is passed
    <MainScreen>
      <img
        src={RiverRanchMainImage}
        alt="River Ranch"
        width="100%"
        height="100%"
        className={styles.image}
      />
      <SiteCarousel
        sites={sites}
        showArrows
        selectedSiteIndex={selectedSiteIndex}
        siteChanged={handleSiteChanged}
        siteTapped={handleSiteTapped}
      />
    </MainScreen>
  );
};

export default withRouter(RiverRanchMainScreen);
