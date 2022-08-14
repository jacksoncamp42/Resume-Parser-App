/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
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
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        education
        experience
        skills
        # createdAt
        # updatedAt
        # _version
        # _deleted
        # _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResumes = /* GraphQL */ `
  query SyncResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
