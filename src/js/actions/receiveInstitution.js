export default function receiveInstitution(data) {
  return {
    type: types.RECEIVE_INSTITUTION,
    institution: data.institution
  }
}
