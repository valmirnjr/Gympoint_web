import React from "react";

import PropTypes from "prop-types";
import { Container } from "./styles";

export default function CreateLayout({ children }) {
  return <Container>{children}</Container>;
}

CreateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
