import SiteCarousel from "../SiteCarousel";

import artist from "../../../data/LocalLegends.json";

export default {
  component: SiteCarousel,
  props: {
    artist,
    siteTapped: site => console.log(`tapped Site: ${JSON.stringify(site)}`),
    siteChanged: site => console.log(`changed Site: ${JSON.stringify(site)}`),
    selectedSiteIndex: 2
  }
};
