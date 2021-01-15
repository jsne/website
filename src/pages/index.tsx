import React from 'react';

import { Button } from '~/components/ui/Button';
import { Layout } from '~/components/base/Layout';
import { Text } from '~/components/ui/Text';

const IndexPage: React.FC = () => {
  return (
    <Layout head={{ title: 'JavaScript North East' }}>
      <header>
        <Text as="h1">Hello</Text>
      </header>
      <Button as="a" href="/test" button="primary">
        Hello
      </Button>
      <main>Main</main>
    </Layout>
  );
};

export default IndexPage;
