const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const { data } = await graphql(`
    query {
      allProjects:allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allProjects.edges.forEach(({node}) => {
    createPage({
      path: `projects/${node.slug}`,
      component: path.resolve("./src/templates/project-template.js"),
      context: {
        slug: node.slug,
      }
    })
  });
}
