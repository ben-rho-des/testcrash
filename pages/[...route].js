import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Page = ({ title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} 🔮</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title} 🔮</h1>
      </main>
    </div>
  );
};
export const getServerSideProps = async (ctx) => {
  let { route } = ctx.query;

  if (Array.isArray(route)) {
    route = route.join('/');
  }

  if (route.indexOf('.') >= 0) {
    // route has a dot, don't try to call contentful just redirect to 404
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  // get content for page from cms
  return {
    props: {
      title: 'something'
    }
  };
};

export default Page;
