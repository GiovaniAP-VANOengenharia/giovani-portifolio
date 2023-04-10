import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import IProjeto from '../../interfaces';

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projetos.indexOf(projeto)}
            title={projeto.title}
            slug={projeto.slug}
            img={projeto.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
