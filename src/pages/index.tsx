import { useEffect, useState } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles.ts ';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import { ProjectsData } from '../services/projects_data';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setProjects(ProjectsData);
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projects} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}
