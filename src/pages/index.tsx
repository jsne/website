import React from 'react';

import { Button } from '~/components/base/Button';
import { Text } from '~/components/base/Text';
import { Layout } from '~/components/template/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout head={{ title: 'JavaScript North East' }}>
      <header>
        <Text as="h1">Hello</Text>
      </header>
      <Button as="a" href="/test" buttonAppearance="primary">
        Hello
      </Button>
      <main>Main</main>
    </Layout>
  );
};

export default IndexPage;
