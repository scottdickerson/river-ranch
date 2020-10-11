import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SiteSlide.module.css';
import ReactHTMLParser from 'react-html-parser';
import classnames from 'classnames';

class SiteSlide extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    isNearSelected: PropTypes.bool,
  };

  static defaultProps = {
    isSelected: false,
    isNearSelected: false,
  };

  handleClick = event => {
    const { onClick } = this.props;
    onClick(this.props, event);
  };

  render() {
    const { id, thumbnail, name, isSelected, isNearSelected } = this.props;
    return (
      <div
        className={classnames(styles.siteSlide, {
          [styles.isSelected]: isSelected,
          [styles.isNearSelected]: isNearSelected,
        })}
        onClick={this.handleClick}>
        <img
          draggable="false"
          id={id}
          tabIndex="0"
          className="innerSlide"
          src={thumbnail}
          alt={name}
          onTouchStart={evt => evt.currentTarget.focus()}
        />
        <span className={styles.siteSlideTitle}>{isSelected ? ReactHTMLParser(name) : ' '}</span>
      </div>
    );
  }
}

export default SiteSlide;
