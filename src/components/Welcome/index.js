import React from 'react'

import { Container, Hoth } from './styles';

export default function Welcome() {
  return (
    <Container>
      <span>Bem vindo ao
        <Hoth>
          Hoth!
        </Hoth>
      </span>
      <span>Para uma estratégia de batalha, use o formulário ao lado esquerdo.</span>
    </Container>
  )
}
