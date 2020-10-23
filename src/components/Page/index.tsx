import React from 'react';
import DefaultOverlayComponent from '../DefaultOverlayComponent';
import { ModelsWrapper } from '../Model';
import ModelSection from '../Model/ModelSection';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './style'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(model => (
            <ModelSection
              key={model}
              className='colored'
              modelName={model}
              overlayNode={
                <DefaultOverlayComponent
                  label={model}
                  description='Order Online for Delivery'
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page;