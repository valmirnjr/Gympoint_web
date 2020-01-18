import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IoMdAdd } from "react-icons/io";

import {
  createProfileRequest,
  deleteStudentRequest,
} from "~/store/modules/student/actions";

import api from "~/services/api";
import history from "~/services/history";

import { Container, StudentsTable } from "./styles";

import search from "~/assets/search.svg";

export default function ListStudents() {
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.student.refresh);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const response = await api.get("students");
        setStudents(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }

    loadStudents();
  }, [refresh]);

  function handleEdit(studentId) {
    dispatch(createProfileRequest(studentId));
  }

  function handleCreateStudent() {
    history.push("/create/students");
  }

  function handleDelete(studentId) {
    dispatch(deleteStudentRequest(studentId));
  }

  return (
    <Container>
      <main>
        <strong>Gerenciando alunos</strong>
        <aside>
          <button type="button" onClick={handleCreateStudent}>
            <IoMdAdd size={18} />
            <strong>CADASTRAR</strong>
          </button>
          <input type="text" placeholder="Buscar aluno" icon={search} />
        </aside>
      </main>

      <StudentsTable>
        <thead>
          <tr>
            <th id="name">NOME</th>
            <th id="email">E-MAIL</th>
            <th id="age">IDADE</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.email}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <div className="age">{student.age}</div>
              </td>
              <td>
                <button type="button" onClick={() => handleEdit(student.id)}>
                  <Link to="/edit/students">editar</Link>
                </button>
                <button type="button" onClick={() => handleDelete(student.id)}>
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentsTable>
    </Container>
  );
}
