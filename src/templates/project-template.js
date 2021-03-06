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

  const {title,projectCreated,projectPrice,fullDesc,projectDelivery,projectDuration,location} = data.project

  return (
    <Layout>
      <SEO />
      <Header />
      <Wrapper as={Container}>
        <Grid theme={theme}>
          <div>
            <h1>{title}</h1>
            <p>{fullDesc.fullDesc}</p>
            <div>Deal Size: {projectPrice}</div>
            <div>Created At: {projectCreated}</div>
            <div>Project Length: {projectDuration}</div>
            <div>Delivery Date: {projectDelivery}</div>
          </div>
          <h1>Location Map</h1>
        </Grid>
      </Wrapper>
      <Contact/>
    </Layout>
  )
}

export const getSingleProjects = graphql`
    query($slug: String!) {
      project:contentfulAllProjects(slug: {eq: $slug}) {
        title
        slug
        fullDesc {
          fullDesc
        }
        projectCreated(formatString: "DD-MM-YYYY")
        projectDelivery(formatString: "DD-MM-YYYY")
        projectDuration
        projectPrice
        projectLocation {
          lat
          lon
        }
      }
    }
  `

export default projectTemplate
