import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const getProjects = graphql`
    query{
      allProjects:allContentfulProjects {
        edges {
          node {
            id
            title
            slug
            desc {
              raw
            }
            createdAt(formatString: "DD-MM-YYYY")
            dealSize
            projectLength
            projectDeliveryDate(formatString: "DD-MM-YYYY")
            shortDescriptions {
              shortDescriptions
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
  console.log(projects);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map(({ node }) => (
          <Item key={node.id} as="a" href={`/projects/${node.slug}`} theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.title}</h4>
                <p>{node.shortDescriptions.shortDescriptions}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
