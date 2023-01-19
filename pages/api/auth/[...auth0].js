import { handleAuth, handleLogin, handleProfile } from '@auth0/nextjs-auth0';

export const afterRefetch = async (req, res, session) => {
  return {
    ...session,
    user: {
      ...session.user,
      app_metadata: { blah: 'blah' }
    }
  };
};

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: '/dashboard'
    });
  },
  async profile(req, res) {
    try {
      await handleProfile(req, res, { afterRefetch, refetch: true });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});
