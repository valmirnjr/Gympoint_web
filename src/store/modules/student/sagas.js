import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

import { updateProfileSuccess, deleteStudentSuccess } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload.data;

    const profile = {
      name,
      email,
      age,
      weight,
      height,
    };

    const response = yield call(api.put, `students/${id}`, profile);

    toast.success("Perfil do aluno atualizado com sucesso!");

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.info("Erro na atualização do aluno.");
  }
}

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;

    const profile = {
      name,
      email,
      age,
      weight,
      height,
    };

    yield call(api.post, "students", profile);

    toast.success("Aluno cadastrado com sucesso.");

    history.push("/list/students");
  } catch (err) {
    toast.info("Erro no cadastro do aluno.");
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { studentId } = payload;

    yield call(api.delete, `students/${studentId}`);

    toast.success("Ação concluída com sucesso!");

    yield put(deleteStudentSuccess());
  } catch (err) {
    toast.info("Não foi possível concluir a ação.");
  }
}

export default all([
  takeLatest("@student/UPDATE_PROFILE_REQUEST", updateProfile),
  takeLatest("@student/CREATE_STUDENT_REQUEST", createStudent),
  takeLatest("@student/DELETE_STUDENT_REQUEST", deleteStudent),
]);
