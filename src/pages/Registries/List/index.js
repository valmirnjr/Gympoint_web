import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt-BR";

import { editRequest, deleteRequest } from "~/store/modules/registry/actions";

import api from "~/services/api";

import ListLayout from "~/pages/_layouts/list/index";
import ListHeader from "~/components/ListHeader";
import RegistryTable from "~/components/Tables/RegistryTable";

export default function ListRegistries() {
  const dispatch = useDispatch();

  const refresh = useSelector(state => state.plan.refresh);

  const [registries, setRegistries] = useState([]);

  useEffect(() => {
    async function loadRegistries() {
      try {
        const response = await api.get("registries");

        const dateFormat = "dd 'de' MMMM 'de' yyyy";
        const dateOptions = { locale: pt };

        const data = response.data.map(reg => ({
          studentName: reg.student.name,
          startDate: format(parseISO(reg.start_date), dateFormat, dateOptions),
          endDate: format(parseISO(reg.end_date), dateFormat, dateOptions),
          ...reg,
        }));

        setRegistries(data);
      } catch (err) {
        toast.info("Erro no carregamento dos planos.");
      }
    }

    loadRegistries();
  }, [refresh, registries]);

  function handleEdit(registry) {
    dispatch(editRequest(registry));
  }

  function handleDelete(registryId) {
    // eslint-disable-next-line
    if (window.confirm(`Excluir plano?`)) {
      dispatch(deleteRequest(registryId));
    }
  }

  return (
    <ListLayout>
      <>
        <ListHeader pageName="matrículas" dest="/registry/new" />
        <RegistryTable
          registries={registries}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </>
    </ListLayout>
  );
}
