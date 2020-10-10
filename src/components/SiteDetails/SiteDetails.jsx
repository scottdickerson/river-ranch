import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ButtonClose from "./img/Button-Close-X.png";
import classnames from "classnames";

import styles from "./SiteDetails.module.css";

class SiteDetails extends Component {
  static propTypes = {
    rightPane: PropTypes.node.isRequired,
    leftPane: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCloseSite: PropTypes.func.isRequired,
    className: PropTypes.string,
    contentClassName: PropTypes.string
  };

  static defaultProps = {
    animate: true
  };

  render() {
    const {
      isOpen,
      rightPane,
      leftPane,
      onCloseSite,
      className,
      contentClassName,
      animate
    } = this.props;

    const details = (
      <div className={classnames(styles.siteDetails, className)}>
        <div className={classnames(styles.siteDetailContent, contentClassName)}>
          <div className={styles.siteDetailBackground} />
          <div className={styles.leftPane}>{leftPane}</div>
          <div className={styles.rightPane}>{rightPane}</div>
        </div>
        <img
          src={ButtonClose}
          alt="Close"
          className={styles.closeButton}
          onClick={onCloseSite}
        />
      </div>
    );
    return animate ? (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={500}
        classNames="bottom"
      >
        {details}
      </CSSTransition>
    ) : isOpen ? (
      details
    ) : null;
  }
}

export default SiteDetails;
