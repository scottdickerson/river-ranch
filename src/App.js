import React, { useState } from 'react';
import { Route } from 'react-router';
import { ROUTES } from './constants/constants';
import RiverRanchPullScreen from './containers/RiverRanchPullScreen/RiverRanchPullScreen';
import RiverRanchMainScreen from './containers/RiverRanchMainScreen/RiverRanchMainScreen';
import RiverRanchSiteDetails from './containers/RiverRanchSiteDetails/RiverRanchSiteDetails';
import styles from './App.module.css';

const App = () => {
  const [selectedSiteIndex, setSelectedSiteIndex] = useState(0);
  return (
    <div className={styles.app}>
      <RiverRanchPullScreen />
      <Route
        path={ROUTES.MAINSCREEN}
        render={() => (
          <RiverRanchMainScreen
            selectedSiteIndex={selectedSiteIndex}
            setSelectedSiteIndex={setSelectedSiteIndex}
          />
        )}
      />
      <Route
        path={ROUTES.DETAILS}
        render={() => (
          <RiverRanchSiteDetails
            selectedSiteIndex={selectedSiteIndex}
            setSelectedSiteIndex={setSelectedSiteIndex}
          />
        )}
      />
    </div>
  );
};

export default App;
