import PropTypes from "prop-types";
import Slider from "react-slick";
import React from "react";
import ReactHTMLParser from 'react-html-parser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SiteCarousel.css";
import SiteSlide from "../SiteSlide/SiteSlide";

import ArtistSchema from "../../schemas/artist";

class SiteCarousel extends React.Component {
  static propTypes = {
    sites: PropTypes.arrayOf(PropTypes.shape(ArtistSchema)).isRequired,
    siteTapped: PropTypes.func.isRequired,
    siteChanged: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    selectedSiteIndex: PropTypes.number
  };

  static defaultProps = {
    visible: true,
    selectedSiteIndex: 0
  };

  constructor(props) {
    super(props);
    this.settings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 5,
      speed: 500,
      cssEase: "ease-out",
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 5000,
      focusOnSelect: true,
      draggable: true,
      swipeToSlide: true,
      initialSlide: props.selectedSiteIndex
    };
  }

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
    const { visible, siteChanged, selectedSiteIndex, sites } = this.props;

    const style = { visibility: visible ? "visible" : "hidden" };
    return (
      <div className="siteCarouselPositioner" style={style}>
        <div className="siteCarouselTitle">{ReactHTMLParser(sites[selectedSiteIndex].name)}</div>
        <div className="siteCarouselBackground" />
        <div
          className="siteCarousel"
          style={{
            width: `${this.settings.slidesToShow === 3 ? 65 : 95}%`,
            left: `${this.settings.slidesToShow === 3 ? 3.5 : 1}%`
          }}
        >
          <Slider
            {...this.settings}
            beforeChange={siteChanged}
            onSwipe={this.swiped}
          >
            {sites.map(site => (
              <SiteSlide
                {...site}
                key={`div-${site.id}`}
                onClick={this.siteTapped}
              />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SiteCarousel;
