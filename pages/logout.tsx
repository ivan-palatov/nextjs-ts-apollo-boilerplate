import { logoutMutation } from '../graphql/user/mutations/logout';
import { IMyContext } from '../interfaces/MyContext';
import redirect from '../lib/redirect';

const Logout = () => {
  return null;
};
Logout.getInitialProps = async ({ apolloClient, ...ctx }: IMyContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();
  redirect(ctx, '/');
  return {};
};

export default Logout;
