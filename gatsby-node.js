const onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /rc-drawer/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

module.exports = { onCreatePage, onCreateWebpackConfig }
