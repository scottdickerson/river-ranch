import PropTypes from 'prop-types';
import Slider from 'react-slick';
import React from 'react';
import ReactHTMLParser from 'react-html-parser';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SiteCarousel.css';
import SiteSlide from '../SiteSlide/SiteSlide';
import { SitePropTypes } from '../../constants/SitePropTypes';

/**
 * Carousel component that triggers siteTapped when a site is tapped and
 * siteChanged is triggered when the slider slides
 */
class SiteCarousel extends React.Component {
  static propTypes = {
    sites: PropTypes.arrayOf(SitePropTypes).isRequired,
    siteTapped: PropTypes.func.isRequired,
    siteChanged: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    selectedSiteIndex: PropTypes.number,
    isPaused: PropTypes.bool,
    autoPlayMS: PropTypes.number,
  };

  static defaultProps = {
    visible: true,
    selectedSiteIndex: 0,
    isPaused: false,
    autoPlayMS: 5000,
  };

  componentWillUnmount() {
    clearTimeout(this.swipeTimeout);
  }

  swiped = () => {
    this.recentlySwiped = true;
    clearTimeout(this.swipeTimeout);
    this.swipeTimeout = setTimeout(() => {
      this.recentlySwiped = false;
    }, 300);
  };

  siteTapped = (site, event) => {
    const { siteTapped } = this.props;
    if (!this.recentlySwiped) {
      siteTapped(site, event);
    }
  };

  render() {
    const { visible, siteChanged, selectedSiteIndex, sites, isPaused, autoPlayMS } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
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
        <div className="siteCarouselTitle">{ReactHTMLParser(sites[selectedSiteIndex]?.name)}</div>
        <div className="siteCarouselBackground" />
        <div
          className="siteCarousel"
          style={{
            width: `${settings.slidesToShow === 3 ? 65 : 95}%`,
            left: `${settings.slidesToShow === 3 ? 3.5 : 1}%`,
          }}>
          <Slider {...settings} beforeChange={siteChanged} onSwipe={this.swiped}>
            {sites.map(site => (
              <SiteSlide {...site} key={`div-${site.id}`} onClick={this.siteTapped} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SiteCarousel;
