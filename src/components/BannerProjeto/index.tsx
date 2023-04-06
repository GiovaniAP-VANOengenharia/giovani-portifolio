import { Container } from './styles';

interface BannerProjetoProps {
  title: string;
  imgUrl: string;
}

function BannerProjeto({ title, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
      </section>
    </Container>
  );
}

export default BannerProjeto;
