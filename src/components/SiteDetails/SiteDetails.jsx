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
          <button className={styles.previousButton} alt="Previous" onClick={onPreviousSite} />
        ) : null}
        <button alt="Close" className={styles.closeButton} onClick={onCloseSite} />
        {onNextSite ? (
          <button alt="Next" className={styles.nextButton} onClick={onNextSite} />
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
