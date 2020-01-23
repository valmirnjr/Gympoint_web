import React, { useState, useEffect } from "react";

import { Form, Input, Select } from "@rocketseat/unform";
// import Select from "react-select";

// import ReactSelect from "~/components/ReactSelect";

import api from "~/services/api";

import EditLayout from "~/pages/_layouts/edit/index";

export default function EditRegistries() {
  const [plansOptions, setPlansOptions] = useState([]);

  useEffect(() => {
    async function loadPlansOptions() {
      const response = await api.get("/plans");

      const data = response.data.map(plan => ({
        id: plan.id,
        title: plan.title,
      }));

      setPlansOptions(data);
    }

    loadPlansOptions();
  }, []);

  function handleSubmit() {}

  return (
    <EditLayout pageName="Matrículas">
      <Form /* initialData={} */ onSubmit={handleSubmit}>
        <main>
          <strong>ALUNO</strong>
          <Input name="student" type="text" placeholder="Nome do aluno" />

          <div>
            <div>
              <strong>PLANO</strong>
              <Select
                name="plan"
                options={plansOptions}
                placeholder="Selecione o plano..."
                required
              />
            </div>

            <div>
              <strong>DATA DE INÍCIO</strong>
              <Input name="startDate" type="date" placeholder="25/12/2020" />
            </div>

            <div>
              <strong>DATA DE TÉRMINO</strong>
              <Input
                name="endDate"
                type="date"
                placeholder="25/12/2020"
                disabled
              />
            </div>

            <div>
              <strong>VALOR FINAL</strong>
              <Input
                name="fullPrice"
                type="text"
                placeholder="R$00,00"
                disabled
              />
            </div>
          </div>
        </main>
      </Form>
    </EditLayout>
  );
}
