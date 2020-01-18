import produce from "immer";

const INITIAL_STATE = {
  profile: {},
  refresh: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@student/CREATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      case "@student/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      case "@student/DELETE_PROFILE": {
        draft.profile = {};
        break;
      }
      case "@student/CREATE_STUDENT_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      case "@student/DELETE_STUDENT_SUCCESS": {
        draft.refresh = !draft.refresh;
        break;
      }
      default:
    }
  });
}
