import React from "react";
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function ListHeader({ pageName, dest }) {
  return (
    <Container>
      <strong>Gerenciando {pageName}</strong>
      <aside>
        <Link to={dest}>
          <IoMdAdd size={18} />
          <strong>CADASTRAR</strong>
        </Link>
      </aside>
    </Container>
  );
}

ListHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
};
