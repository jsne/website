import React from 'react';

import { Layout } from '~/components/template/Layout';
import * as Hero from '~/components/base/Hero';
import { Header } from '~/components/preset/Header';

const IndexPage: React.FC = () => {
  return (
    <Layout head={{ title: 'JavaScript North East' }}>
      <Hero.HeroRoot>
        <Header />
        <Hero.HeroMain heroLayout={{ bpsm: 'center' }} wrapperPadding="x4">
          <Hero.HeroTitle as="h1" textSize="hero">
            Hi
          </Hero.HeroTitle>
          <Hero.HeroBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum dolore,
            cupiditate impedit voluptas reiciendis, quam ipsa aperiam ratione
            necessitatibus assumenda ex quos praesentium aliquam architecto excepturi,
            amet molestiae soluta.
          </Hero.HeroBody>
        </Hero.HeroMain>
      </Hero.HeroRoot>
      <Hero.HeroBottom />

      <noscript>I can&apos;t believe you&apos;ve done this.</noscript>
    </Layout>
  );
};

export default IndexPage;
