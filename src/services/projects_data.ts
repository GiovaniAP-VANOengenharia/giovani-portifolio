import image from '../../public/ogimage.png';
import mywallet from '../../public/mywallet.png';
import mytunes from '../../public/mytunes.png';
import mydelivery from '../../public/mydelivery.png';

export const ProjectsData = [
  {
    title: 'My Wallet',
    slug: 'mywallet',
    type: 'FrontEnd',
    description: `Solução web que funciona como um gerenciador de finanças pessoais
       com várias moedas mundiais. Baseado em JavaScript desenvolvido em
       ReactJS e Redux para a persistencia de dados e obter a contação das
       moedas em uma API de cotações.`,
    gitHub: 'https://github.com/GiovaniAP-VANOengenharia/Trybe_Wallet',
    deploy: 'https://my-wallet-virid.vercel.app/',
    thumbnail: mywallet
  },
  {
    title: 'My Tunes',
    slug: 'mytunes',
    type: 'FrontEnd',
    description: `Solução web que traz amostras de músicas que simula plataformas como SpotFy.
       Nele o usuário pode procurar pelo nome de um artista que é buscado em uma API de
       amostras de músicas. O resultado vem vários álbuns que coincidem com o nome do
       artista procurado e neles vem a amostra das músicas de cada álbum. Baseado em
       javaScript e desenvolvido em ReactJS Hooks e Context pra persistencia de dados.`,
    gitHub: 'https://github.com/GiovaniAP-VANOengenharia/MyTunes',
    deploy: 'https://my-tunes-xi.vercel.app/',
    thumbnail: mytunes
  },
  {
    title: 'My Delivery App',
    slug: 'mydelivery',
    type: 'Full Stack',
    description: `Solução web que simula um app de marketplace como IFood. Ao logar no
       app como cliente, o usuário é direcionado à página de escolha dos produtos onde
       ele pode selecionar a quantidade de cada produto, e depois no carrinho de compras
       ele pode retirar items ou finalizar a compra. Logado como vendedor o usuário é
       direcionado à página que estão os pedidos feitos por consumidores que o escolheram
       como vendedor da compra e dentro de cada compra ele pode atualizar o status dela de
       acordo com status de preparando, ou em transito. Ao logar como administrador o
       usuário é direcionado á página onde ele pode deletar e cadastrar usuários sendo esse
       usuário adminstrador, cliente ou vendedor. Baseado em javaScript tando o FrontEnd
       quando o BackEnd, o FrontEnd foi desenvolvido em ReactJS Hooks e Context pra
       persistencia de dados. A comunicação do FrontEnd com o BackEnd é feita através do
       Axios. O BackEnd foi desenvolvido com o banco de dados baseado em MySQL e o padrão
       de projeto foi MSC utilizando-se do ORM Sequilize para obter dados e atualizar o
       banco de dados.`,
    gitHub: 'https://github.com/GiovaniAP-VANOengenharia/delivery_app',
    deploy: 'string',
    thumbnail: mydelivery
  },
  {
    title: 'Projeto04',
    slug: 'project04',
    type: 'Full Stack',
    description: 'string',
    gitHub: 'string',
    deploy: 'string',
    thumbnail: image
  }
];
