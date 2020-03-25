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
      <span>Para uma nova estratégia de batalha, use o formulário.</span>
      <span>Para atualizar uma estratégia existente, clique no icone de edição no card e preencha o formulário novamente.</span>
    </Container>
  )
}
