/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      message
      Note {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      User {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      liked_users
      collected_users
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNoteId
      postUserId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      message
      Note {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      User {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      liked_users
      collected_users
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNoteId
      postUserId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      message
      Note {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      User {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      liked_users
      collected_users
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNoteId
      postUserId
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      title
      content
      author {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      noteAuthorId
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      title
      content
      author {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      noteAuthorId
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      title
      content
      author {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      noteAuthorId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      user_sub_id
      user_pool_id
      username
      collected_post
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      user_sub_id
      user_pool_id
      username
      collected_post
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      user_sub_id
      user_pool_id
      username
      collected_post
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
