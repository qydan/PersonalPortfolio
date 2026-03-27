import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiSwift,
  SiKotlin,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiFastapi,
  SiVuedotjs,
  SiPytorch,
  SiDocker,
  SiGit,
  SiLinux,
  SiTerraform,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithubactions,
  SiJira,
  SiPostman,
  SiMapbox,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'C/C++', icon: SiC },
      { name: 'Dart', icon: SiDart },
      { name: 'Swift', icon: SiSwift },
      { name: 'Kotlin', icon: SiKotlin },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'PyTorch', icon: SiPytorch },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Git', icon: SiGit },
      { name: 'Postman', icon: SiPostman },
      { name: 'Jira', icon: SiJira },
      { name: 'Mapbox', icon: SiMapbox },
    ],
  },
]

export default skills
