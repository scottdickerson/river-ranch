import SiteDetails from '../../components/SiteDetails/SiteDetails';
import React, { useState, useEffect } from 'react';
import { ROUTES } from '../../constants/constants';
import { withRouter } from 'react-router-dom';
import { sites } from '../RiverRanchMainScreen/RiverRanchMainScreen';

const RiverRanchSiteDetails = ({
  match: {
    params: { id },
  },
  history,
  setSelectedSiteIndex,
  selectedSiteIndex,
}) => {
  // start open
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const opener = setTimeout(() => setIsOpen(true));
    return () => clearTimeout(opener);
  }, [id]);

  const handleClose = () => {
    setIsOpen(false); // need to wait for 300 seconds for the closing animation to finish
    setTimeout(() => {
      history.push(ROUTES.MAINSCREEN);
    }, 300);
  };
  return (
    <SiteDetails
      onCloseSite={handleClose}
      onPreviousSite={() => {
        const previousSite = (selectedSiteIndex - 1 + sites.length) % sites.length;
        setSelectedSiteIndex(previousSite);
        history.push(ROUTES.DETAILS.replace(':id', previousSite));
      }}
      onNextSite={() => {
        const nextSite = (selectedSiteIndex + 1) % sites.length;
        setSelectedSiteIndex(nextSite);
        history.push(ROUTES.DETAILS.replace(':id', nextSite));
      }}
      isOpen={isOpen}
      content={
        <img
          alt="River Ranch"
          src={sites[id].detailsSrc}
          height="100%"
          width="100%"
          style={{ objectFit: 'cover' }}
        />
      }></SiteDetails>
  );
};

export default withRouter(RiverRanchSiteDetails);
