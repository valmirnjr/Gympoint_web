import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Content } from "./styles";

import logo from "~/assets/logo.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={logo} alt="Gympoint" />
            <h1>GYMPOINT</h1>
          </div>
          <menu>
            <NavLink exact to="/list/students">
              ALUNOS
            </NavLink>
            <NavLink exact to="/list/plans">
              PLANOS
            </NavLink>
            <NavLink exact to="/list/registries">
              MATRÍCULAS
            </NavLink>
            <NavLink exact to="/list/help-orders">
              PEDIDOS DE AUXÍLIO
            </NavLink>
          </menu>
        </nav>

        <aside>
          <strong>Diego Fernandes</strong>
          <button type="submit">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
