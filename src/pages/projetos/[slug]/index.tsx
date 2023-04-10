import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import { ProjectsData } from '../../../services/projects_data';
import IProjeto from '../../../interfaces';

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button" onClick={() => handleRedirect(projeto.gitHub)}>
          Ver no gitHub
        </button>

        <button type="button" onClick={() => handleRedirect(projeto.deploy)}>
          Ver projeto online
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pruducts = ProjectsData;

  const paths = pruducts.map(projeto => ({
    params: {
      slug: projeto.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const project = ProjectsData.find(proj => proj.slug === slug);

  const projeto = {
    slug: project.slug,
    title: project.title,
    type: project.type,
    description: project.description,
    gitHub: project.gitHub,
    thumbnail: project.thumbnail
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
