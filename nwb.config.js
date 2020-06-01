module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'rrr',
      externals: {
        react: 'React'
      }
    }
  }
}
