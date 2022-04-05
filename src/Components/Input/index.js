import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Input = ({ label, type, id, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <S.Input id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
};
export default Input;
