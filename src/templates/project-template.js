import React, { useContext } from 'react'
import {graphql } from 'gatsby';
import { Layout, SEO } from 'components/common'
import { Header } from 'components/theme'
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from '../components/common';
import { Contact, Skills } from 'components/landing';
import { Wrapper, Grid } from "./project-template-styles"


const projectTemplate = ({ data }) => {
  console.log(data.project);

  const { theme } = useContext(ThemeContext);

  const {title,createdAt,dealSize,fullDescriptions,projectDeliveryDate,projectLength,location} = data.project

  return (
    <Layout>
      <SEO />
      <Header />
      <Wrapper as={Container}>
        <Grid theme={theme}>
          <div>
            <h1>{title}</h1>
            <p>{fullDescriptions.fullDescriptions}</p>
            <div>Deal Size: {dealSize}</div>
            <div>Created At: {createdAt}</div>
            <div>Project Length: {projectLength}</div>
            <div>Delivery Date: {projectDeliveryDate}</div>
          </div>
          <h1>Location Map</h1>
        </Grid>
      </Wrapper>
      <Contact/>
    </Layout>
  )
}

export const getSingleProjects = graphql`
    query ($slug: String!) {
      project:contentfulProjects(slug: {eq: $slug}) {
        slug
        title
        createdAt(formatString: "DD-MM-YYY")
        projectLength
        projectDeliveryDate(formatString: "DD-MM-YYY")
        dealSize
        fullDescriptions {
          fullDescriptions
        }
        location {
          lon
          lat
        }
      }
    }
  `

export default projectTemplate
