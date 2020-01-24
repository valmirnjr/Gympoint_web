import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Input, Select } from "@rocketseat/unform";

import PropTypes from "prop-types";
// import { Container } from "./styles";
import api from "~/services/api";

import AsyncSelectInput from "~/components/Inputs/SelectInput";
import DateInput from "~/components/Inputs/DateInput";

export default function FormBody({
  plansOptions,
  fullPrice,
  updating,
  studentPicked,
  // defaultStudent,
}) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [endDate, setEndDate] = useState(null);

  async function studentOptions(inputValue) {
    const response = await api.get(`students?q=${inputValue}`);

    const students = response.data.map(student => ({
      value: student.id,
      label: student.name,
    }));

    return students;
  }

  function handleStudentChange(student) {
    setSelectedStudent(student);
    console.tron.log(student);
  }

  function handlePlanChange(plan) {
    // console.tron.log(plan);
  }

  function updateEndDate(newStartDate) {
    console.tron.log(newStartDate);
  }

  return (
    <main>
      {updating ? (
        <AsyncSelectInput
          name="student"
          label="ALUNO"
          loadOptions={studentOptions}
          defaultValue={studentPicked}
        />
      ) : (
        <Input
          name="student" // O initialData vem com um objeto do tipo student
          className="normalInput"
          label="ALUNO"
          placeholder="Nome do aluno"
        />
      )}

      {/* <section>
        <div>
          <Select
            name="plan"
            label="PLANO"
            options={plansOptions}
            placeholder="Selecione o plano..."
            onChange={handlePlanChange}
            required
          />
        </div>
        <DateInput
          name="startDate"
          label="DATA DE INÍCIO"
          // onChange={updateEndDate} startDate={}
        />
        <div>
          <Input
            name="endDate"
            label="DATA DE TÉRMINO"
            value={endDate}
            disabled
          />
        </div>
        <div>
          <Input
            name="fullPrice"
            label="PREÇO TOTAL"
            value={fullPrice}
            disabled
          />
        </div>
      </section> */}
    </main>
  );
}

FormBody.propTypes = {
  // endDate: PropTypes.string.isRequired,
};
