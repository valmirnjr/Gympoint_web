import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";

import api from "~/services/api";

import { editRequest, deleteRequest } from "~/store/modules/plan/actions";

import { Container, PlansTable } from "./styles";

export default function ListPlans() {
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.plan.refresh);

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await api.get("plans");
        setPlans(response.data);
      } catch (err) {
        toast.info("Erro no carregamento dos planos.");
      }
    }

    loadPlans();
  }, [refresh]);

  function handleEdit(plan) {
    dispatch(editRequest(plan));
  }

  function handleDelete(planId) {
    dispatch(deleteRequest(planId));
  }

  return (
    <Container>
      <main>
        <strong>Gerenciando planos</strong>
        <aside>
          <Link to="/create/plans">
            <IoMdAdd size={18} />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </main>

      <PlansTable>
        <thead>
          <tr>
            <th id="title">TÍTULO</th>
            <th id="duration">DURAÇÃO</th>
            <th id="price">VALOR p/ MÊS</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.title}>
              <td>{plan.title}</td>
              <td className="duration">
                {plan.duration} {plan.duration === 1 ? "mês" : "meses"}
              </td>
              <td className="price">R${plan.price},00</td>
              <td>
                <button type="button" onClick={() => handleEdit(plan)}>
                  <Link to="/edit/plans">editar</Link>
                </button>
                <button type="button" onClick={() => handleDelete(plan.id)}>
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </PlansTable>
    </Container>
  );
}
