import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string;
  imgUrl: string;
  slug: string;
}

function ProjetoItem({ title, imgUrl, slug }: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;
