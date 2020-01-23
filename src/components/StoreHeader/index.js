import React from "react";

import { MdKeyboardArrowLeft, MdCheck } from "react-icons/md";
import PropTypes from "prop-types";

import history from "~/services/history";
import { Container } from "./styles";

export default function StoreHeader({ pageName }) {
  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <strong>Edição de {pageName}</strong>
      <aside>
        <button type="button" onClick={handleGoBack}>
          <MdKeyboardArrowLeft size={18} />
          <strong>VOLTAR</strong>
        </button>
        <button type="submit">
          <MdCheck size={18} />
          <strong>SALVAR</strong>
        </button>
      </aside>
    </Container>
  );
}

StoreHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
};
