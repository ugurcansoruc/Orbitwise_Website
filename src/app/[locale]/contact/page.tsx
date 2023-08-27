'use client';

import { useTranslations } from "next-intl";
import Breadcrumb from "@/../components/Common/Breadcrumb";
import Contact from "@/../components/Contact";

function ContactPage () {
  const tPage = useTranslations('HeaderPage');
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        mainPageName={tPage('Home')}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
