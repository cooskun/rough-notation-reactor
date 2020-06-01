module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RoughNotationReactor',
      externals: {
        react: 'React',
      },
    },
  },
}
