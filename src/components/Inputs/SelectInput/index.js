import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { Input } from "@rocketseat/unform";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function SelectInput({
  label,
  name,
  loadOptions,
  defaultValue,
}) {
  const [inputValue, setInputValue] = useState(defaultValue.value);

  function handleChange(row) {
    setInputValue(row.value);
  }

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <AsyncSelect
        loadOptions={loadOptions}
        onChange={handleChange}
        // value={selectedValue}
        defaultValue={defaultValue}
        placeholder="Pesquisar aluno..."
        isLoading
        cacheOptions
        defaultOptions
      />
      <Input type="text" name={name} value={inputValue} hidden readOnly />
    </Container>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  loadOptions: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

SelectInput.defaultProps = {
  label: "",
  defaultValue: "",
};
