'use client';

import AboutSectionOne from 'components/About/AboutSectionOne';
import AboutSectionTwo from 'components/About/AboutSectionTwo';
import Blog from 'components/Blog';
import Brands from 'components/Brands';
import ScrollUp from 'components/Common/ScrollUp';
import Contact from 'components/Contact';
import Hero from 'components/Hero';
import Pricing from 'components/Pricing';
import Testimonials from 'components/Testimonials';
import Video from 'components/Video';
import {useTranslations} from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      {/*TODO - removed Features*/}
      <ScrollUp />
      <Hero />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
