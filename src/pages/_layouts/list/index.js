import React from "react";

import PropTypes from "prop-types";
import { Container } from "./styles";

export default function ListLayout({ children }) {
  return <Container>{children}</Container>;
}

ListLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
