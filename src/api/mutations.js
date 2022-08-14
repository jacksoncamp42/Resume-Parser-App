/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
      id
      name
      phone
      email
      education
      experience
      skills
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
      id
      name
      phone
      email
      education
      experience
      skills
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
      id
      name
      phone
      email
      education
      experience
      skills
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
