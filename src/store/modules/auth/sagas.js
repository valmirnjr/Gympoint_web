import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "~/services/history";
import api from "~/services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user) {
      toast.info("Nenhum usuário encontrado.");
      return;
    }

    yield put(signInSuccess(token, user));

    history.push("/list/students");
  } catch (err) {
    toast.info("Falha na autenticação, verifique seus dados.");
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
