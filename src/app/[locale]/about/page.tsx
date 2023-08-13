'use client';

import AboutSectionOne from "@/../components/About/AboutSectionOne";
import AboutSectionTwo from "@/../components/About/AboutSectionTwo";
import Breadcrumb from "@/../components/Common/Breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
