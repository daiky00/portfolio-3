import { StyledIcon } from '@styled-icons/styled-icon';
import { Angular } from '@styled-icons/simple-icons/Angular';
import { Vuejs } from '@styled-icons/boxicons-logos/Vuejs';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { Html5 } from '@styled-icons/simple-icons/Html5';
import { Css3 } from '@styled-icons/simple-icons/Css3';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Webpack } from '@styled-icons/simple-icons/Webpack';
import { Babel } from '@styled-icons/simple-icons/Babel';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Vite } from '@styled-icons/simple-icons/Vite';
import { Cypress } from '@styled-icons/simple-icons/Cypress';
import { Nx } from '@styled-icons/simple-icons/Nx';
import { Docker } from '@styled-icons/simple-icons/Docker';
import { Git } from '@styled-icons/simple-icons/Git';

interface Skill {
  name: string;
  Icon: StyledIcon;
}

export const skillsList: Skill[] = [
  { name: "Angular", Icon: Angular },
  { name: "Vue.js", Icon: Vuejs },
  { name: "React", Icon: ReactLogo },
  { name: "HTML5", Icon: Html5 },
  { name: "CSS3", Icon: Css3 },
  { name: "JavaScript", Icon: Javascript },
  { name: "TypeScript", Icon: Typescript },
  { name: "Styled Components", Icon: Styledcomponents },
  { name: "Webpack", Icon: Webpack },
  { name: "Babel", Icon: Babel },
  { name: "GraphQL", Icon: Graphql },
  { name: "Vite", Icon: Vite },
  { name: "Cypress", Icon: Cypress },
  { name: "Nx", Icon: Nx },
  { name: "Docker", Icon: Docker },
  { name: "Git", Icon: Git }
];