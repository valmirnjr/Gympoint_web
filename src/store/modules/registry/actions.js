export function editRequest(registry) {
  return {
    type: "@registry/EDIT_REQUEST",
    payload: { registry },
  };
}

export function deleteRequest(registryId) {
  return {
    type: "@registry/DELETE_REQUEST",
    payload: { registryId },
  };
}
