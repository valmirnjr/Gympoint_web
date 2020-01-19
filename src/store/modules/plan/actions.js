export function editRequest(plan) {
  return {
    type: "@plan/EDIT_REQUEST",
    payload: { plan },
  };
}

export function deleteRequest(planId) {
  return {
    type: "@plan/DELETE_REQUEST",
    payload: { planId },
  };
}

export function deleteSuccess() {
  return {
    type: "@plan/DELETE_SUCCESS",
  };
}

export function updateRequest(data) {
  return {
    type: "@plan/UPDATE_REQUEST",
    payload: { data },
  };
}

export function updateSuccess(plan) {
  return {
    type: "@plan/UPDATE_SUCCESS",
    payload: { plan },
  };
}

export function createRequest(data) {
  return {
    type: "@plan/CREATE_REQUEST",
    payload: { data },
  };
}
