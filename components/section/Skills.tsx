// react
import * as React from 'react';
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import IllustratorCCIcon from 'components/icon/IllustratorCC';
import LightroomCCIcon from 'components/icon/LightroomCC';
// context
import ComponentsContext from 'context/componentsContext';
import Aws from 'components/icon/Aws';
import Next from 'components/icon/Next';
import MongoDB from 'components/icon/MongoDB';
import ReactJs from 'components/icon/React';
import Laravel from 'components/icon/Laravel';
import Node from 'components/icon/Node';
import Expressjs from 'components/icon/Expressjs';
import Git from 'components/icon/Git';
import Docker from 'components/icon/Docker';
import Postgresql from 'components/icon/Postgresql';
import Codeigniter from 'components/icon/Codeigniter';
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <Aws bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'AWS',
      progressValue: 0,
    },
    {
      Icon: (
        <Node bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Node Js',
      progressValue: 0,
    },
    {
      Icon: (
        <Expressjs bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Epress Js',
      progressValue: 0,
    },
    {
      Icon: (
        <MongoDB bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'MongoDB',
      progressValue: 0,
    },
    {
      Icon: (
        <Next bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'NextJs',
      progressValue: 0,
    },
    {
      Icon: (
        <ReactJs bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'ReactJs',
      progressValue: 0,
    },
    {
      Icon: (
        <Laravel bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Laravel',
      progressValue: 0,
    },
    {
      Icon: (
        <Codeigniter bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Codeigniter',
      progressValue: 0,
    },
    {
      Icon: (
        <Postgresql bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'PostgreSQL',
      progressValue: 0,
    },
    {
      Icon: (
        <Git bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Git (CI/CD)',
      progressValue: 0,
    },
    {
      Icon: (
        <Docker bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Docker',
      progressValue: 0,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title}`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
