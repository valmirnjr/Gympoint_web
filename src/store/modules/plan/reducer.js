import produce from "immer";

const INITIAL_SATE = {
  id: null,
  title: "",
  duration: null,
  price: null,
  refresh: false,
};

export default function plan(state = INITIAL_SATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@plan/EDIT_REQUEST": {
        draft.id = action.payload.plan.id;
        draft.title = action.payload.plan.title;
        draft.duration = action.payload.plan.duration;
        draft.price = action.payload.plan.price;
        break;
      }
      case "@plan/DELETE_SUCCESS": {
        draft.refresh = !draft.refresh;
        break;
      }
      default:
    }
  });
}
