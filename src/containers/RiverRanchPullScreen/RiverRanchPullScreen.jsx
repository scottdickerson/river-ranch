import React from 'react';
import { ROUTES } from '../../constants/constants';
import { withRouter } from 'react-router';
import PullScreen from '../../components/PullScreen/PullScreen';
import PullScreenImage from './img/00_02-new.jpg';
import styles from './RiverRanchPullScreen.module.css';

/**
 *
 * This component renders the correct pull screen image and maps the pull and main to the correct URL routes for this app
 */
const RiverRanchPullScreen = ({ history }) => {
  const showMain = () => {
    history.push(ROUTES.MAINSCREEN);
  };

  const showPull = () => {
    history.push(ROUTES.PULLSCREEN);
    window.location.reload(); // reload the whole page this is a hack to try and stop memory leakss
  };

  return (
    <PullScreen onClick={showMain} onReset={showPull}>
      <img
        alt="River Ranch"
        src={PullScreenImage}
        height="100%"
        width="100%"
        className={styles.image}
      />
    </PullScreen>
  );
};

export default withRouter(RiverRanchPullScreen);
