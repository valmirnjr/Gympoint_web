import React from "react";

import PropTypes from "prop-types";

import { Container } from "./styles";

export default function EditLayout({ children }) {
  return <Container>{children}</Container>;
}

EditLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
