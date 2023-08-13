'use client';

import { useTranslations } from "next-intl";
import AboutSectionOne from "@/../components/About/AboutSectionOne";
import AboutSectionTwo from "@/../components/About/AboutSectionTwo";
import Breadcrumb from "@/../components/Common/Breadcrumb";

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <>
      <Breadcrumb
        pageName={t('Header')}
        description={t('Content')}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
