import React, { useCallback, useRef, useState } from 'react';
import ModelOverlay from '../ModelOverlay';
import ModelsContext, { CarModel } from '../ModelsContext';

import { Container, OverlayRoot } from './style'

const ModelWrapper: React.FC = ({ children }) => {
  const modelWrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((carModel: CarModel) => {
    setRegisteredModels(prevState => [...prevState, carModel])
  }, [])

  const unregisterModel = useCallback((carModelName: string) => {
    setRegisteredModels(prevState => {
      return prevState.filter(({ modelName }) => { 
        return modelName !== carModelName
      })
    })
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(model => model.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef: modelWrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={modelWrapperRef}>
        <OverlayRoot>
          {registeredModels.map(registeredModel => {
            return (
              <ModelOverlay key={registeredModel.modelName} >{registeredModel.overlayNode}</ModelOverlay>
            )
          })}
        </OverlayRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelWrapper;