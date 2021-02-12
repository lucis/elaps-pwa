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

const onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
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
      externals: getConfig().externals.concat((_context, request, callback) => {
        // Exclude bundling firebase* and react-firebase*
        // These are instead required at runtime.
        if (
          /^@?(react-)?firebase(.*)/.test(request) ||
          /^@?@firebase(.*)/.test(request)
        ) {
          console.log(`Excluding bundling of: ${request}`)

          return callback(null, `umd ${request}`)
        }

        callback(undefined, undefined)
      }),
    })
  }
}

module.exports = { onCreatePage, onCreateWebpackConfig }
