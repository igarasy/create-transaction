import React from "react";
import useFetch from "../Hooks/useFetch";
import * as S from "./styled";
import { API_URL } from "../../api";

const TransactionCard = () => {
  const { data, fetchData } = useFetch();

  React.useEffect(() => {
    function fetchAticle() {
      fetchData(API_URL);
    }
    fetchAticle();
  }, []);
  if (data)
    return (
      <S.TransactionCard>
        <S.TransactionTable>
          <S.Thead>
            <S.Tr>
              <S.Th>Nome do estabalecimento</S.Th>
              <S.Th>Data da compra</S.Th>
              <S.Th>Valor</S.Th>
              <S.Th>Meio de pagamento</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {data.data.map((value) => {
              const getDate = (date) => {
                return date
                  .substring(0, 10)
                  .replace(/T.*/, "")
                  .split("-")
                  .reverse()
                  .join("-");
              };
              return (
                <>
                  <S.Tr key={value.id}>
                    <S.Td>{value.attributes.establishment_name}</S.Td>
                    <S.Td>{getDate(value.attributes.createdAt)}</S.Td>
                    <S.Td>R$ {value.attributes.amount}</S.Td>
                    <S.Td>{value.attributes.payment_method}</S.Td>
                    {console.log(`${value.attributes.amount} olá`)}
                  </S.Tr>
                </>
              );
            })}
          </S.Tbody>
        </S.TransactionTable>
      </S.TransactionCard>
    );
  else return null;
};

export default TransactionCard;
