import { handleProfile } from '@auth0/nextjs-auth0';
import { afterRefetch } from './[...auth0]';

export default async function me(req, res) {
  const { refetch } = req.query;
  try {
    await handleProfile(req, res, {
      afterRefetch,
      refetch: refetch === 'true'
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
