import React from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import RiverRanchMainImage from './img/01_02-new.jpg';
import styles from '../RiverRanchPullScreen/RiverRanchPullScreen.module.css';

const RiverRanchMainScreen = () => {
  return (
    <MainScreen>
      <img
        src={RiverRanchMainImage}
        alt="River Ranch"
        width="100%"
        height="100%"
        className={styles.image}
      />
    </MainScreen>
  );
};

export default RiverRanchMainScreen;
