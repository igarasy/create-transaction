import React from 'react';
import * as S from './styled';
import Button from '../Button';
import TransactionCard from '../TransactionCard';
import { Link } from 'react-router-dom';
const Transaction = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Title>Listagem de transações</S.Title>
          <Link to={`create`}>
            <Button
              text="criar transação"
              background={'#4F46E5'}
              color={'white'}
            />
          </Link>
        </S.Header>
        <TransactionCard />
      </S.Container>
    </S.Wrapper>
  );
};

export default Transaction;
