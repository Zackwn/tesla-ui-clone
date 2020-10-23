import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './style';

interface ModelOverlayProps {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetHeight' | 'offsetTop'>

const ModelOverlay: React.FC<ModelOverlayProps> = ({ model, children }) => {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetHeight: model.sectionRef.current?.offsetHeight,
      offsetTop: model.sectionRef.current?.offsetTop
    } as SectionDimensions
  }, [model.sectionRef])

  const [sectionDimensions, setSectionDimensions] = useState<SectionDimensions>(getSectionDimensions())

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setSectionDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimensions])

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - sectionDimensions.offsetTop) / sectionDimensions.offsetHeight
  )

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )

  return (
    <Container style={{ opacity }}>
      {children}
    </Container>
  )
}

export default ModelOverlay;