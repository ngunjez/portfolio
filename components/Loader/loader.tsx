import { Container, LoaderBase, LoaderThree, LoaderTwo } from '@/styles/Loader';
import React from 'react';

const Loader = () => {
  return (
    <Container>
      <LoaderBase />
      <LoaderTwo />
      <LoaderThree />
    </Container>
  );
};

export default Loader;