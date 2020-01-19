import React from "react";
import { useDispatch } from "react-redux";

import { Form, Input } from "@rocketseat/unform";

import { MdKeyboardArrowLeft, MdCheck } from "react-icons/md";

import {
  createStudentRequest,
  deleteProfile,
} from "~/store/modules/student/actions";

import history from "~/services/history";

import CreateLayout from "~/pages/_layouts/create";

export default function CreateStudents() {
  const dispatch = useDispatch();

  function handleGoBack() {
    history.goBack();
    dispatch(deleteProfile());
  }

  function handleSubmit(data) {
    dispatch(createStudentRequest(data));
  }

  return (
    <CreateLayout>
      <Form onSubmit={handleSubmit}>
        <header>
          <strong>Cadastro de aluno</strong>
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
        </header>

        <main>
          <strong>NOME COMPLETO</strong>
          <Input name="name" type="text" placeholder="Nome do aluno" />

          <strong>ENDEREÇO DE EMAIL</strong>
          <Input name="email" type="text" placeholder="aluno@email.com.br" />

          <div>
            <div>
              <strong>Idade</strong>
              <Input name="age" type="number" step="1" placeholder="31" />
            </div>

            <div>
              <strong>PESO (em Kg)</strong>
              <Input
                name="weight"
                type="number"
                step="0.25"
                min="0"
                placeholder="83.4 Kg"
              />
            </div>

            <div>
              <strong>Altura (em m)</strong>
              <Input
                name="height"
                type="number"
                step="0.01"
                min="0"
                placeholder="1.88 m"
              />
            </div>
          </div>
        </main>
      </Form>
    </CreateLayout>
  );
}
