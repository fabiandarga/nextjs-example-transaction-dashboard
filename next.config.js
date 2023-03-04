const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'pages'), path.join(__dirname, 'components')],
  },
}