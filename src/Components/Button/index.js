import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Button = ({ color, background, text, onClick }) => {
  return (
    <S.Button color={color} background={background} onClick={onClick}>
      {text}
    </S.Button>
  );
};

Button.defaultProps = {
  color: "white",
  text: "Criar",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
