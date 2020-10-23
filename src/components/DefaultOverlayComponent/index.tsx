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
        <h1>{description}</h1>
      </Heading>

      <Buttons>
        <button>Something</button>
        <button className='white' >Otherthing</button>
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayComponent;