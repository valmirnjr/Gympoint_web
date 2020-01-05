import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";

import { signInRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, insira um e-mail válido!")
    .required("Por favor, insira seu e-mail!"),
  password: Yup.string().required("Por favor, informe a sua senha!"),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <h1>
        <strong>GYMPOINT</strong>
      </h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <strong>SUA SENHA</strong>
        <Input name="password" type="password" placeholder="*************" />

        <button type="submit">
          <strong>{loading ? "Carregando..." : "Entrar no sistema"}</strong>
        </button>
      </Form>
    </>
  );
}
