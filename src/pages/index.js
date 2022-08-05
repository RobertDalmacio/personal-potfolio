import {useEffect} from 'react';
import Head from 'next/head'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import {BsArrowUpSquare} from 'react-icons/bs'
import { FaUser } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>Robert Dalmacio Portfolio</title>
        <meta name="description" content="Robert Dalmacio Portfolio" />
        <link rel="icon" href='/RD-logo.png' />
      </Head>

      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Timeline />
      <Projects />
      {/* <Acomplishments /> */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '0.5rem 0.75rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        <BsArrowUpSquare size='3rem' />
      </button>
    </Layout>
  );
};

export default Home;
