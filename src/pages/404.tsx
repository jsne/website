import { Link } from 'gatsby';
import type { FC } from 'react';

import img404Src from '~/assets/images/404-1.gif';
import { Banner } from '~/blocks/Banner';
import { Box } from '~/components/atoms/Box';
import { Button } from '~/components/atoms/Button';
import { HeroBody, HeroMain, HeroRoot, HeroTitle } from '~/components/compositions/Hero';
import { Layout } from '~/components/primitives/Layout';

const NotFoundPage: FC = () => {
  return (
    <Layout
      head={{
        title: 'Page not found',
        description: `The page you're looking for does not exist.`,
      }}
    >
      <HeroRoot css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Banner />
        <Box css={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <HeroMain heroLayout="center" wrapperPadding="x4">
            <Box
              as="img"
              src={img404Src}
              alt="Not found"
              css={{ display: 'block', borderRadius: '$2' }}
            />

            <HeroTitle textPreset="h1" as="h1">
              Page Not Found
            </HeroTitle>

            <HeroBody css={{ marginBottom: '$2' }}>
              Sorry, we couldn&apos;t find what you were looking for.
            </HeroBody>

            <Button buttonAppearance="secondary" as={Link} to="/">
              Go to Homepage
            </Button>
          </HeroMain>
        </Box>
      </HeroRoot>
    </Layout>
  );
};

export default NotFoundPage;
