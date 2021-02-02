import React from 'react';

import { ReactComponent as LogoSvg } from '~/assets/images/logo.svg';
import { Layout } from '~/components/template/Layout';
import { styled } from '~/styles/stitches.config';

const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  withLinearGradient: 'primary',
});

const Logo = styled(LogoSvg, {
  width: '100%',
  maxWidth: '16rem',
});

const IndexPage: React.FC = () => {
  return (
    <Layout head={{ title: 'JavaScript North East' }}>
      <Root>
        <header>
          <Logo />
          <noscript>I can&apos;t believe you&apos;ve done this</noscript>
        </header>
      </Root>
    </Layout>
  );
};

export default IndexPage;
