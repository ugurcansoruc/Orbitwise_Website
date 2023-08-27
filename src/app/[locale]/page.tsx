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

export default function IndexPage() {
  const TranslateContactPageT = useTranslations('ContactPageT');
  const TranslateContactFormT = useTranslations('ContactFormT');
  const TranslateVideoComponent = useTranslations('Video_Component');

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
      <Contact ContactPageTranslate={_ContactPageT}/>
    </>
  );
}
