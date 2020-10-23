import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';
import { Container } from './style';

interface ModelSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<ModelSectionProps> = ({ 
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ overlayNode, modelName, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  )
}

export default ModelSection;