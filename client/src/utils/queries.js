import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

// got up until line 14
export const QUERY_USERS = gql`
  query users($username: String!) {
    users(username: $username) {
      _id
      username
      email
      artist
      arts{}
      comments {}
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const QUERY_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
    comment(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ART = gql`
query art($artId: ID!) {
  art(Art: $artId) {
    _id
    title
    artist
    image
    description
    location
    createdAt
    comment:{
      commentText
      commentAuthor
    }
    addedBy
  }
}
`;
