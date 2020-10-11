import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import styles from './SiteDetails.module.css';

class SiteDetails extends Component {
  static propTypes = {
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCloseSite: PropTypes.func.isRequired,
    onNextSite: PropTypes.func,
    onPreviousSite: PropTypes.func,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
  };

  static defaultProps = {
    animate: true,
  };

  handleButtonClick = callback => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
    callback();
  };

  render() {
    const {
      isOpen,
      content,
      onCloseSite,
      className,
      contentClassName,
      animate,
      onNextSite,
      onPreviousSite,
    } = this.props;

    const details = (
      <div className={classnames(styles.siteDetails, className)}>
        <div className={classnames(styles.siteDetailContent, contentClassName)}>{content}</div>
        {onPreviousSite ? (
          <button
            className={classnames(styles.previousButton, 'button')}
            alt="Previous"
            onClick={() => this.handleButtonClick(onPreviousSite)}
          />
        ) : null}
        <button
          alt="Close"
          className={classnames(styles.closeButton, 'button')}
          onClick={onCloseSite}
        />
        {onNextSite ? (
          <button
            alt="Next"
            className={classnames(styles.nextButton, 'button')}
            onClick={() => this.handleButtonClick(onNextSite)}
          />
        ) : null}
      </div>
    );
    return animate ? (
      <CSSTransition mountOnEnter unmountOnExit in={isOpen} timeout={500} classNames="bottom">
        {details}
      </CSSTransition>
    ) : isOpen ? (
      details
    ) : null;
  }
}

export default SiteDetails;
