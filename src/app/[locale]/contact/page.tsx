'use client';

import { useTranslations } from "next-intl";
import Breadcrumb from "@/../components/Common/Breadcrumb";
import Contact from "@/../components/Contact";
import { ContactFormT, ContactPageT } from "types/contactPageTranslation";

function ContactPage () {
  const tPage = useTranslations('HeaderPage');
  const TranslateContactPageT = useTranslations('ContactPageT');
  const TranslateContactFormT = useTranslations('ContactFormT');

  //Contact translation
  const _ContactFormT : ContactFormT = {
    HeaderName: TranslateContactFormT('HeaderName'),
    PlaceholderName: TranslateContactFormT('PlaceholderName'),
    HeaderMail: TranslateContactFormT('HeaderMail'),
    PlaceholderMail: TranslateContactFormT('PlaceholderMail'),
    HeaderMessage: TranslateContactFormT('HeaderMessage'),
    PlaceholderMessage: TranslateContactFormT('PlaceholderMessage'),
    Submit: TranslateContactFormT('Submit'),
  }
  const _ContactPageT : ContactPageT = {
    Header:TranslateContactPageT('Header'),
    Content:TranslateContactPageT('Content'),
    _ContactFormT: _ContactFormT
  }

  return (
    <>
      <Breadcrumb
        pageName={tPage('Support')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        mainPageName={tPage('Home')}
      />

      <Contact ContactPageTranslate={_ContactPageT}/>
    </>
  );
};

export default ContactPage;
