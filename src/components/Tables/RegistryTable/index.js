import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { IoMdCheckmarkCircle } from "react-icons/io";
// import { Container } from './styles';

export default function RegistryTable({
  registries,
  // handleEdit,
  handleDelete,
}) {
  return (
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
              <Link
                to={{
                  pathname: "registries/store",
                  state: { initialData: registry },
                }}
              >
                editar
              </Link>
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
  );
}

RegistryTable.propTypes = {
  registries: PropTypes.arrayOf(
    PropTypes.shape({
      student_id: PropTypes.number.isRequired,
      student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      plan: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
