import React from 'react';
import * as S from './styled';

import FormTransaction from '../FormTransaction';
const InputPage = () => {
  return (
    <S.InputPage>
      <S.Wrapper>
        <S.Container>
          <S.Header>Criação de transações</S.Header>
          <FormTransaction />
        </S.Container>
      </S.Wrapper>
    </S.InputPage>
  );
};

export default InputPage;
