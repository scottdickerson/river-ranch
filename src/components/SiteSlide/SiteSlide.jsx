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
    isBeforeSelected: PropTypes.bool,
    isAfterSelected: PropTypes.bool,
  };

  static defaultProps = {
    isSelected: false,
    isBeforeSelected: false,
    isAfterSelected: false,
  };

  handleClick = event => {
    const { onClick } = this.props;
    onClick(this.props, event);
  };

  render() {
    const { id, thumbnail, name, isSelected, isBeforeSelected, isAfterSelected } = this.props;
    return (
      <div
        className={classnames(styles.siteSlide, {
          [styles.isSelected]: isSelected,
          [styles.isBeforeSelected]: isBeforeSelected,
          [styles.isAfterSelected]: isAfterSelected,
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
