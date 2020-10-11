import PropTypes from 'prop-types';
import Slider from 'react-slick';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SiteCarousel.css';
import SiteSlide from '../SiteSlide/SiteSlide';
import { SitePropTypes } from '../../constants/SitePropTypes';

const propTypes = {
  sites: PropTypes.arrayOf(SitePropTypes).isRequired,
  siteTapped: PropTypes.func.isRequired,
  siteChanged: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  selectedSiteIndex: PropTypes.number,
  isPaused: PropTypes.bool,
  autoPlayMS: PropTypes.number,
  showBackground: PropTypes.bool,
  showArrows: PropTypes.bool,
};

const defaultProps = {
  visible: true,
  selectedSiteIndex: 0,
  isPaused: false,
  showBackground: false,
  autoPlayMS: 5000,
  showArrows: false,
};
/**
 * Carousel component that triggers siteTapped when a site is tapped and
 * siteChanged is triggered when the slider slides, stateful component that keeps track of the currently
 * selected Site.
 */
const SiteCarousel = ({
  siteTapped,
  visible,
  siteChanged,
  selectedSiteIndex,
  sites,
  isPaused,
  autoPlayMS,
  showBackground,
  showArrows,
}) => {
  const swipeTimeout = useRef();
  const recentlySwiped = useRef(false); // this is like a debouncer to keep from triggering the tap event after a swipe

  /** remove the timeout when component leaves if set */
  useEffect(() => () => clearTimeout(swipeTimeout?.current), []);

  /** special function to stop the extra tapped event */
  const handleSwiped = () => {
    recentlySwiped.current = true;
    clearTimeout(swipeTimeout?.current);
    // Keep track of swipe timeout ref for clearing
    swipeTimeout.current = setTimeout(() => {
      recentlySwiped.current = false;
    }, 300);
  };

  const handleSiteTapped = (site, event) => {
    if (!recentlySwiped?.current) {
      siteTapped(site, event);
    }
  };

  const handleSiteChanged = (oldSite, newSite, ...args) => {
    siteChanged(oldSite, newSite, ...args);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: showArrows,
    slidesToShow: 5,
    speed: 500,
    cssEase: 'ease-out',
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: !isPaused,
    autoplaySpeed: autoPlayMS,
    focusOnSelect: true,
    draggable: true,
    swipeToSlide: true,
    initialSlide: selectedSiteIndex,
  };

  const style = { visibility: visible ? 'visible' : 'hidden' };
  return (
    <div className="siteCarouselPositioner" style={style}>
      {showBackground ? <div className="siteCarouselBackground" /> : null}
      <div className="siteCarousel">
        <Slider {...settings} beforeChange={handleSiteChanged} onSwipe={handleSwiped}>
          {sites.map((site, index) => (
            <SiteSlide
              {...site}
              key={`div-${site.id}`}
              onClick={handleSiteTapped}
              isSelected={index === selectedSiteIndex}
              isNearSelected={
                index === (selectedSiteIndex - 1 + sites.length) % sites.length || // handle left index
                index === (selectedSiteIndex + 1) % sites.length // handle right index
              }
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

SiteCarousel.propTypes = propTypes;
SiteCarousel.defaultProps = defaultProps;
export default SiteCarousel;
