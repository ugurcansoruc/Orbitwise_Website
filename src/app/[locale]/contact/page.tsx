'use client';

import { useTranslations } from "next-intl";
import Breadcrumb from "@/../components/Common/Breadcrumb";
import Contact from "@/../components/Contact";
import { ContactFormT, ContactPageT } from "types/contactPageTranslation";
import { NewsLatterBoxT } from "types/newsLatterBoxTranslation";

function ContactPage () {
  const tPage = useTranslations('HeaderPage');
  const TranslateContactPageT = useTranslations('ContactPageT');
  const TranslateContactFormT = useTranslations('ContactFormT');
  const TranslationNewsLatterBoxT = useTranslations("NewsLatterBoxT");

  const _ContactFormT : ContactFormT = {
    HeaderName: TranslateContactFormT('HeaderName'),
    PlaceholderName: TranslateContactFormT('PlaceholderName'),
    HeaderMail: TranslateContactFormT('HeaderMail'),
    PlaceholderMail: TranslateContactFormT('PlaceholderMail'),
    HeaderMessage: TranslateContactFormT('HeaderMessage'),
    PlaceholderMessage: TranslateContactFormT('PlaceholderMessage'),
    Submit: TranslateContactFormT('Submit'),
    ModalMessageSuccess: TranslateContactFormT('MailSendSuccess'),
    ModalMessageSuccessData:TranslateContactFormT('MailSendSuccessData'),
    ModalMessageFail: TranslateContactFormT('MailSendFail')
  }
  const _ContactPageT : ContactPageT = {
    Header:TranslateContactPageT('Header'),
    Content:TranslateContactPageT('Content'),
    _ContactFormT,
  }

  const _NewsLatterBoxT: NewsLatterBoxT = {
    Header: TranslationNewsLatterBoxT("Header"),
    Content: TranslationNewsLatterBoxT("Content"),
    PlaceholderName: TranslationNewsLatterBoxT("PlaceholderName"),
    PlaceholderMail: TranslationNewsLatterBoxT("PlaceholderMail"),
    Subscribe: TranslationNewsLatterBoxT("Subscribe"),
    SubContent: TranslationNewsLatterBoxT("SubContent"),
  };

  return (
    <>
      <Breadcrumb
        pageName={tPage('Support')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        mainPageName={tPage('Home')}
      />

      <Contact _ContactPageTranslate={_ContactPageT} _NewsLatterBoxT={_NewsLatterBoxT}/>
    </>
  );
};

export default ContactPage;
