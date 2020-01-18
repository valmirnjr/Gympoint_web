import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

import {
  createProfileSuccess,
  updateProfileSuccess,
  createStudentSuccess,
  deleteStudentSuccess,
} from "./actions";

export function* createProfile({ payload }) {
  try {
    const { studentId } = payload;

    const response = yield call(api.get, `students?id=${studentId}`);

    /**
     * O estudante encontrado vem em um array com um único objeto. Dessa forma,
     * profile contém simplesmente um objeto.
     */
    const profile = response.data[0];

    yield put(createProfileSuccess(profile));
  } catch (err) {
    toast.error("Erro no carregamento da página.");
  }
}

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

    const response = yield call(api.post, "students", profile);

    toast.success("Aluno cadastrado com sucesso.");

    yield put(createStudentSuccess(response.data));

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
  takeLatest("@student/CREATE_PROFILE_REQUEST", createProfile),
  takeLatest("@student/UPDATE_PROFILE_REQUEST", updateProfile),
  takeLatest("@student/CREATE_STUDENT_REQUEST", createStudent),
  takeLatest("@student/DELETE_STUDENT_REQUEST", deleteStudent),
]);
