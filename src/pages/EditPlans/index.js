import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { MdKeyboardArrowLeft, MdCheck } from "react-icons/md";

import { updateRequest } from "~/store/modules/plan/actions";

import history from "~/services/history";

import { Container } from "./styles";

export default function EditPlans() {
  const dispatch = useDispatch();

  const plan = useSelector(state => ({
    id: state.plan.id,
    title: state.plan.title,
    duration: state.plan.duration,
    price: state.plan.price,
    fullPrice: state.plan.price * state.plan.duration,
  }));

  function handleSubmit(data) {
    data = {
      id: plan.id,
      ...data,
    };
    dispatch(updateRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Form initialData={plan} onSubmit={handleSubmit}>
        <header>
          <strong>Edição de plano</strong>
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
          <strong>TÍTULO DO PLANO</strong>
          <Input name="title" type="text" placeholder="Nome do plano" />

          <div>
            <div>
              <strong>DURAÇÃO (em meses)</strong>
              <Input name="duration" type="text" placeholder="1 mês" />
            </div>

            <div>
              <strong>PREÇO MENSAL</strong>
              <Input
                name="price"
                type="number"
                step="any"
                min="0"
                placeholder="R$00,00"
              />
            </div>

            <div>
              <strong>PREÇO TOTAL</strong>
              <Input
                name="fullPrice"
                type="number"
                step="any"
                min="0"
                placeholder="R$00,00"
                readOnly
                disabled
              />
            </div>
          </div>
        </main>
      </Form>
    </Container>
  );
}
