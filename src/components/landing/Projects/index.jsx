import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const getProjects = graphql`
    query {
      allProjects:allContentfulAllProjects {
        edges {
          node {
            id
            title
            slug
            shortDesc {
              shortDesc
            }
          }
        }
      }
    }
  `

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const response = useStaticQuery(getProjects);
  console.log(response);
  const projects = response.allProjects.edges

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map(({ node }) => (
          <Item key={node.id} as="a" href={`/projects/${node.slug}`} theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.title}</h4>
                <p>{node.shortDesc.shortDesc}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
