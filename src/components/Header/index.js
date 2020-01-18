import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { Container, Content } from "./styles";

import logo from "~/assets/logo.svg";

import { signOut } from "~/store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
