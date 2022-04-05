import React from "react";
import * as S from "./styled";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from "react-router";

const FormTransaction = () => {
  const navigate = useNavigate();

  const transaction = {
    establishment_name: "",
    amount: "",
    payment_method: "",
  };

  const [form, setForm] = React.useState(transaction);

  async function handleSubmit() {
    await fetch("http://localhost:1337/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: form }),
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <S.FormTransaction onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.InputWrapper>
          <label htmlFor="establishment_name">Nome do estabelecimento:</label>
          <Input
            type="text"
            id="establishment_name"
            value={form.establishment_name}
            onChange={handleChange}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <label htmlFor="amount">Valor </label>
          <Input
            type="number"
            id="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="payment_method">Meio de pagamento </label>
          <S.Select
            type="text"
            id="payment_method"
            required
            value={form.payment_method}
            onChange={handleChange}
          >
            <option value="credit_card">Cartão de Crédito</option>
            <option value="boleto">Boleto</option>
          </S.Select>
        </S.InputWrapper>
      </S.InputContainer>
      <Button
        background={"#4F46E5"}
        color={"white"}
        type="submit"
        onClick={() => alert("Transação Criada")}
      />
      <Button
        text="cancelar"
        background={"#E5E5E5"}
        color={"#4F46E5"}
        onClick={() => navigate("/")}
      />
    </S.FormTransaction>
  );
};

export default FormTransaction;
