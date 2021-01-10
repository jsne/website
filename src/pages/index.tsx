import React from 'react';

import { Layout } from '~/components/base/Layout';
import { Text } from '~/components/ui/Text';

const IndexPage: React.FC = () => {
  return (
    <Layout head={{ title: 'JavaScript North East' }}>
      <header>
        <Text as="h1">Hello</Text>
      </header>
      <main>Main</main>
    </Layout>
  );
};

export default IndexPage;
