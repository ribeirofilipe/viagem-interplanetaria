import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <p>HOTH</p>
      <span>
        <FaUserAstronaut size={40} />
      </span>
    </Container>
  )
}
