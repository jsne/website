import { Link } from 'gatsby';
import React from 'react';

import img404Src from '~/assets/images/404-1.gif';
import { Box } from '~/components/atoms/Box';
import { Button } from '~/components/atoms/Button';
import { Text } from '~/components/atoms/Text';
import { Header } from '~/components/compositions/Header';
import { HeroBody, HeroMain, HeroRoot } from '~/components/compositions/Hero';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      as="main"
      role="main"
      css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
    >
      <title>Not found</title>
      <HeroRoot css={{ flexGrow: 1 }}>
        <Header />
        <HeroMain heroLayout="center" wrapperPadding="x4" css={{ flexGrow: 1 }}>
          <Box
            as="img"
            src={img404Src}
            alt="Not found"
            css={{ display: 'block', borderRadius: '$2' }}
          />

          <Text textPreset="h1" as="h1">
            Page Not Found
          </Text>
          <HeroBody css={{ marginBottom: '$2' }}>
            Sorry, we couldn&apos;t find what you were looking for.
          </HeroBody>
          <Button buttonAppearance="secondary" as={Link} to="/">
            Go to Homepage
          </Button>
        </HeroMain>
      </HeroRoot>
    </Box>
  );
};

export default NotFoundPage;
