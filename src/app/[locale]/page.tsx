'use client';
import { useTranslations } from 'next-intl';
import AboutSectionOne from 'components/About/AboutSectionOne';
import AboutSectionTwo from 'components/About/AboutSectionTwo';
import Blog from 'components/Blog';
import Brands from 'components/Brands';
import ScrollUp from 'components/Common/ScrollUp';
import Contact from 'components/Contact';
import Features from 'components/Features';
import Hero from 'components/Hero';
import Pricing from 'components/Pricing';
import Testimonials from 'components/Testimonials';
import Video from 'components/Video';
import { ContactPageT, ContactFormT } from "types/contactPageTranslation";
import { NewsLatterBoxT } from 'types/newsLatterBoxTranslation';

export default function IndexPage() {
  const TranslateContactPageT = useTranslations('ContactPageT');
  const TranslateContactFormT = useTranslations('ContactFormT');
  const TranslateVideoComponent = useTranslations('Video_Component');
  const TranslationNewsLatterBoxT = useTranslations("NewsLatterBoxT");

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
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Video Header={TranslateVideoComponent('Header')} Content={TranslateVideoComponent('Content')}/>
      {
        /*
        <Brands />
      <Features/>
      <Testimonials />
      <Pricing />
      <Blog />
        */
      }
      <Contact ContactPageTranslate={_ContactPageT} _NewsLatterBoxT={_NewsLatterBoxT}/>
    </>
  );
}
