import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './style';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/">Clone UI</a>
          </li>
          <li>
            <a href="/">Made with <span aria-label='Purple heart' role='img'>💜</span></a>
          </li>
          <li>
            <a href="/">By Rafael Azzi</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay;