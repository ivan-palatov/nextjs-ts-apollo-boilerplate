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

export interface PaginationInput {
  skip: number;

  take: number;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type ChangePasswordVariables = {
  token: string;
  password: string;
};

export type ChangePasswordMutation = {
  __typename?: "Mutation";

  changePassword: ChangePasswordChangePassword;
};

export type ChangePasswordChangePassword = {
  __typename?: "User";

  id: string;

  email: string;

  firstName: string;

  lastName: string;

  fullName: string;
};

export type ConfirmEmailVariables = {
  token: string;
};

export type ConfirmEmailMutation = {
  __typename?: "Mutation";

  confirmEmail: ConfirmEmailConfirmEmail;
};

export type ConfirmEmailConfirmEmail = {
  __typename?: "User";

  id: string;

  email: string;

  firstName: string;

  lastName: string;

  fullName: string;
};

export type ForgotPasswordVariables = {
  email: string;
};

export type ForgotPasswordMutation = {
  __typename?: "Mutation";

  forgotPassword: boolean;
};

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

export type RegisterVariables = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "User";

  id: string;

  email: string;

  firstName: string;

  lastName: string;

  fullName: string;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: MeMe;
};

export type MeMe = {
  __typename?: "User";

  id: string;

  email: string;

  fullName: string;

  firstName: string;

  lastName: string;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export const ChangePasswordDocument = gql`
  mutation ChangePassword($token: String!, $password: String!) {
    changePassword(data: { token: $token, password: $password }) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordVariables>
        mutation={ChangePasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordVariables
>;
export function ChangePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ChangePasswordMutation,
    ChangePasswordVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmEmailDocument = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
export class ConfirmEmailComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ConfirmEmailMutation, ConfirmEmailVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmEmailMutation, ConfirmEmailVariables>
        mutation={ConfirmEmailDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmEmailProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmEmailMutation, ConfirmEmailVariables>
> &
  TChildProps;
export type ConfirmEmailMutationFn = ReactApollo.MutationFn<
  ConfirmEmailMutation,
  ConfirmEmailVariables
>;
export function ConfirmEmailHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmEmailMutation,
        ConfirmEmailVariables,
        ConfirmEmailProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmEmailMutation,
    ConfirmEmailVariables,
    ConfirmEmailProps<TChildProps>
  >(ConfirmEmailDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordVariables
>;
export function ForgotPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
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
export const RegisterDocument = gql`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      data: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      fullName
      firstName
      lastName
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
