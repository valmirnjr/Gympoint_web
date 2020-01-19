import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { updateSuccess, deleteSuccess } from "./actions";

import api from "~/services/api";
import history from "~/services/history";

export function* updateRequest({ payload }) {
  try {
    const { id, title, duration, price } = payload.data;

    const plan = {
      title,
      duration,
      price,
    };

    yield call(api.put, `plans/${id}`, plan);

    toast.success("Plano atualizado com sucesso!");

    yield put(updateSuccess(plan));
  } catch (err) {
    toast.error("Erro na atualização do plano.");
  }
}

export function* deleteRequest({ payload }) {
  try {
    const { planId } = payload;

    yield call(api.delete, `plans/${planId}`);

    toast.success("Plano deletado com sucesso!");

    yield put(deleteSuccess());
  } catch (err) {
    toast.error("Erro no apagamento do plano!");
  }
}

export function* createRequest({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const plan = { title, duration, price };

    yield call(api.post, "plans", plan);

    toast.success("Plano criado com sucesso!");

    history.push("/list/plans");
  } catch (err) {
    toast.error("Erro na criação do novo plano.");
  }
}

export default all([
  takeLatest("@plan/UPDATE_REQUEST", updateRequest),
  takeLatest("@plan/DELETE_REQUEST", deleteRequest),
  takeLatest("@plan/CREATE_REQUEST", createRequest),
]);
