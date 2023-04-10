/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../asset/Perfil.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Giovani</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos =</span> {'\u007B'}
            <div>
              Nome: <span className="blue"> 'Giovani',</span>
            </div>
            <div>
              Sobrenome: <span className="blue"> 'Alves Pereira',</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">MoreInfos =</span> {'\u007B'}
            <div>
              Stack: <span className="blue"> 'Dev Full Stack',</span>
            </div>
            <div>
              Experiência:
              <span className="blue"> 'Em transição de carreira'</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
