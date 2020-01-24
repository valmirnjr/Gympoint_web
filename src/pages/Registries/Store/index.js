import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Select } from "@rocketseat/unform";

import { updateRequest, createRequest } from "~/store/modules/registry/actions";

import api from "~/services/api";

import StoreLayout from "~/pages/_layouts/store";
import StoreHeader from "~/components/StoreHeader";
import RegistryFormBody from "./FormBody";

export default function StoreRegistries() {
  const dispatch = useDispatch();

  const location = useLocation();
  const { initialData } = location.state;

  const studentSelected = initialData && {
    value: initialData.student.id,
    label: initialData.student.name,
  };

  initialData.student.value = studentSelected.value;
  initialData.student.label = studentSelected.label;

  console.log(initialData);

  const [plans, setPlans] = useState([]);
  const [plansOptions, setPlansOptions] = useState([]);

  // Load plans to then pass to the select input
  useEffect(() => {
    async function loadPlansOptions() {
      const response = await api.get("/plans");

      setPlans(response.data);

      const data = response.data.map(plan => ({
        id: plan.id,
        title: plan.title,
      }));

      setPlansOptions(data);
    }

    loadPlansOptions();
  }, []);

  function handleSubmit(data) {
    console.log(data);
    if (initialData) {
      dispatch(updateRequest(data));
    } else {
      dispatch(createRequest(data));
    }
  }

  return (
    <StoreLayout>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <StoreHeader pageName="matrícula" />
        <RegistryFormBody
          plansOptions={plansOptions}
          updating={!!initialData}
          studentPicked={initialData && initialData.student}
          // defaultStudent={studentSelected}
        />
      </Form>
    </StoreLayout>
  );
}
