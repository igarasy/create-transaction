import React from "react";
import useFetch from "../Hooks/useFetch";

const Teste = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/transactions?pagination=1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erro</p>;

  return <div>{data}</div>;
};

export default Teste;
