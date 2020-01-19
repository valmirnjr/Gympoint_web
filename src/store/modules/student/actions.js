export function createProfileRequest(student) {
  return {
    type: "@student/CREATE_PROFILE_REQUEST",
    payload: { student },
  };
}

export function createProfileSuccess(profile) {
  return {
    type: "@student/CREATE_PROFILE_SUCCESS",
    payload: { profile },
  };
}

export function deleteProfile() {
  return {
    type: "@student/DELETE_PROFILE",
  };
}

export function updateProfileRequest(data) {
  return {
    type: "@student/UPDATE_PROFILE_REQUEST",
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: "@student/UPDATE_PROFILE_SUCCESS",
    payload: { profile },
  };
}

export function createStudentRequest(data) {
  return {
    type: "@student/CREATE_STUDENT_REQUEST",
    payload: { data },
  };
}

export function createStudentFailure() {
  return {
    type: "@student/CREATE_STUDENT_FAILURE",
  };
}

export function deleteStudentRequest(studentId) {
  return {
    type: "@student/DELETE_STUDENT_REQUEST",
    payload: { studentId },
  };
}

export function deleteStudentSuccess() {
  return {
    type: "@student/DELETE_STUDENT_SUCCESS",
  };
}
