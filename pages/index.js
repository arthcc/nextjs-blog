import Head from 'next/head';
import Layout,{Blog}from '../public/components/layout';
import utilStyles from "/styles/util.module.css";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../public/components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{Blog}</title>
      </Head>
      <section className={utilStyles.headingMd}/>
        <p>Hey Everyone, my name is Arthur, I´m 19 years old, currently in the 2nd semester of Computer Science Degree, here in Brazil.


As a beginner i can make a lot of mistakes, so please if you see something wrong or a better way to code, contact me. I am here just to learn since my skills are not that good, I´d like a lot to receive any tips or help. Thanks for reading! </p>
        <p>
          Made with the help of {' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial!
          </a>.
        </p>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
