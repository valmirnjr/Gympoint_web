import React from "react";

import PropTypes from "prop-types";

import EditHeader from "~/components/EditHeader";
import { Container } from "./styles";

export default function EditLayout({ children, pageName }) {
  return (
    <Container>
      <EditHeader pageName={pageName} />
      {children}
    </Container>
  );
}

EditLayout.propTypes = {
  children: PropTypes.element.isRequired,
  pageName: PropTypes.string.isRequired,
};
