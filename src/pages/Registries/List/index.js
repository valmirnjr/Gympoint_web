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
    dispatch(deleteRequest(registryId));
  }

  return (
    <ListLayout>
      <>
        <ListHeader pageName="matrículas" dest="/registry/store" />
        <RegistryTable
          registries={registries}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </>
    </ListLayout>
  );
}

/* <ListLayout>
      <>
        <table>
          <thead>
            <tr>
              <th className="left">ALUNO</th>
              <th className="center">PLANO</th>
              <th className="center">INÍCIO</th>
              <th className="center">TÉRMINO</th>
              <th className="center">ATIVA</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {registries.map(registry => (
              <tr key={registry.student_id}>
                <td className="left">{registry.student.name}</td>
                <td className="center">{registry.plan.title}</td>
                <td className="center">{registry.startDate}</td>
                <td className="center">{registry.endDate}</td>
                <td className="center">
                  <IoMdCheckmarkCircle
                    size={20}
                    color={registry.active ? "#42cb59" : "#ddd"}
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleEdit(registry)}>
                    <Link to="/edit/registries">editar</Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(registry.student_id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </ListLayout> */
