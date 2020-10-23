import React from 'react';

import { Container } from './style';

const ModelOverlay: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ModelOverlay;