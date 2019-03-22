import React from 'react';
import { ConfirmEmailMutation, ConfirmEmailVariables } from '../../generated/apolloComponents';
import { confirmEmail } from '../../graphql/user/mutations/confirmEmail';
import { MyContext } from '../../interfaces/MyContext';
import redirect from '../../lib/redirect';

interface IToken {
  token: string;
}

class Confirm extends React.Component<IToken> {
  static async getInitialProps({ query: { token }, apolloClient, ...ctx }: MyContext) {
    if (!token) {
      return {};
    }
    try {
      await apolloClient.mutate<ConfirmEmailMutation, ConfirmEmailVariables>({
        mutation: confirmEmail,
        variables: {
          token: token as string,
        },
      });
      redirect(ctx, '/');
      return {};
    } catch {
      return {};
    }
  }

  render() {
    return (
      <>
        <h1>Something went wrong</h1>
        <h3>Invalid token</h3>
      </>
    );
  }
}

export default Confirm;
