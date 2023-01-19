import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import NextApp from 'next/app';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

const UserComp = () => {
  const { user } = useUser();
  return (
    <div className={styles.sign}>
      {!user && <Link href='/api/auth/login'>Sign in ❤️</Link>}
      {user && (
        <>
          <Link href='/api/auth/logout'>Sign out 💔</Link>{' '}
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
};
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <>
        <UserComp />
        <Component {...pageProps} />
      </>
    </UserProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
