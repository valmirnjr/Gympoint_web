import { all, takeLatest, call } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "~/services/api";

export function* deleteRegistry({ payload }) {
  try {
    const { registryId } = payload;

    yield call(api.delete, `registries/${registryId}`);

    toast.success("Matrícula deletada com sucesso!");
  } catch (err) {
    toast.error("Erro no apagamento da matrícula.");
    console.tron.log(err);
  }
}

export default all([takeLatest("@registry/DELETE_REQUEST", deleteRegistry)]);
