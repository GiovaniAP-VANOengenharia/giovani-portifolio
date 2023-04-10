import { AiFillHtml5 } from 'react-icons/ai';
import { DiMysql, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import {
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiJest
} from 'react-icons/si';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<SiJavascript />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Jest" icon={<SiJest />} />
        <ConhecimentoItem title="NextJs" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="NodeJs" icon={<DiNodejsSmall />} />
        <ConhecimentoItem title="Docker" icon={<SiDocker />} />
        <ConhecimentoItem title="MySQL" icon={<DiMysql />} />
        <ConhecimentoItem title="MongoDB" icon={<DiMongodb />} />
        <ConhecimentoItem title="Python" icon={<SiPython />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
