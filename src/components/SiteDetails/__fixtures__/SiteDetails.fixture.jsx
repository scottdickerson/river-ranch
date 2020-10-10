import React from "react";
import SiteDetails from "../SiteDetails";
import Details from "../../Details/Details";

export default {
  component: SiteDetails,
  props: {
    leftPane: "Hi There",
    rightPane: (
      <Details
        title="Title"
        subTitle="Sub Title"
        details="Lots of details go here"
        animation="Hi There Animation!"
      />
    ),
    isOpen: true,
    onCloseSite: () => console.log(`close site `)
  }
};
