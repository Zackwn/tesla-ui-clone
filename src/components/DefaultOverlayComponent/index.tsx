import React from 'react';

import { Container, Heading, Buttons } from './style'

interface DefaultOverlayComponentProps {
  label: string,
  description: string
}

const DefaultOverlayComponent: React.FC<DefaultOverlayComponentProps> = ({
  description, label
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>custom order</button>
        <button className='white' >existing inventory</button>
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayComponent;