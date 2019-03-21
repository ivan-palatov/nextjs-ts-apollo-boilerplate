export type Maybe<T> = T | null;

export interface SortInput {
  skip: number;

  take: number;
  /** Allowed values: title, rating, views, length, date */
  sortBy: string;
  /** Allowed values: DESC, ASC */
  sortOrder: string;
}

export interface SeekPaginationInput {
  lastId?: Maybe<string>;

  lastInOrder?: Maybe<number>;
  /** Allowed values: title, rating, views, length, date */
  sortBy: string;
  /** Allowed values: DESC, ASC */
  sortOrder: string;

  take: number;
}

export interface StorySearchInput {
  skip: number;

  take: number;
  /** Allowed values: title, rating, views, length, date */
  sortBy: string;
  /** Allowed values: DESC, ASC */
  sortOrder: string;

  title?: Maybe<string>;

  exact?: boolean;

  tagIds?: Maybe<string[]>;

  excludeTagIds?: Maybe<string[]>;

  minViews?: Maybe<number>;

  minRating?: Maybe<number>;

  excludeAuthors?: Maybe<string[]>;

  minLength?: Maybe<number>;

  maxLength?: Maybe<number>;
}

export interface AddStoryInput {
  title: string;

  description?: Maybe<string>;

  link?: string;

  text: string;

  author: string;

  tagIds: string[];
}

export interface AttachTagsInput {
  storyId: string;

  ids: string[];
}

export interface ChangePasswordInput {
  token: string;

  password: string;
}

export interface LoginInput {
  email: string;

  password: string;
}

export interface RegisterInput {
  firstName: string;

  lastName: string;

  email: string;

  password: string;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: "Mutation";

  login: LoginLogin;
};

export type LoginLogin = {
  __typename?: "User";

  id: string;

  email: string;

  firstName: string;

  lastName: string;

  fullName: string;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
