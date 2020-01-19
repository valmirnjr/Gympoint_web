import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { MdKeyboardArrowLeft, MdCheck } from "react-icons/md";
import { Form, Input } from "@rocketseat/unform";

import { createRequest } from "~/store/modules/plan/actions";
import history from "~/services/history";

// import { Container } from './styles';
import CreateLayout from "~/pages/_layouts/create";

export default function CreatePlans() {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState(null);

  function handleSubmit(data) {
    dispatch(createRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  const fullPrice = useMemo(() => price * duration, [price, duration]);

  return (
    <CreateLayout>
      <Form onSubmit={handleSubmit}>
        <header>
          <strong>Cadastro de plano</strong>
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
          <Input name="title" type="text" placeholder="Título do plano" />

          <div>
            <div>
              <strong>DURAÇÃO (em meses)</strong>
              <Input
                name="duration"
                type="number"
                step="1"
                placeholder="X meses"
                onChange={e => setDuration(e.target.value)}
              />
            </div>

            <div>
              <strong>PREÇO MENSAL</strong>
              <Input
                name="price"
                type="number"
                step="any"
                min="0"
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>

            <div>
              <strong>PREÇO TOTAL</strong>
              <Input
                name="fullPrice"
                type="number"
                step="any"
                placeholder="R$ 00,00"
                value={fullPrice}
                disabled
              />
            </div>
          </div>
        </main>
      </Form>
    </CreateLayout>
  );
}
