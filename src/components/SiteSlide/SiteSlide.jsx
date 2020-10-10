import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SiteSlide.module.css';

class SiteSlide extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = event => {
    const { onClick } = this.props;
    onClick(this.props, event);
  };

  render() {
    const { id, thumbnail, name } = this.props;
    return (
      <div className="slide" onClick={this.handleClick}>
        <img
          draggable="false"
          id={id}
          tabIndex="0"
          className="innerSlide"
          src={thumbnail}
          alt={name}
          onTouchStart={evt => evt.currentTarget.focus()}
        />
      </div>
    );
  }
}

export default SiteSlide;
