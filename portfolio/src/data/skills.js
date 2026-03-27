import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
} from 'react-icons/si';
import { FaAws, FaCode } from 'react-icons/fa';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'C', icon: SiC },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
      { name: 'VS Code', icon: FaCode },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    category: 'Cloud',
    items: [
      { name: 'AWS', icon: FaAws },
    ],
  },
];

export default skills;
