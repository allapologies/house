var context = require.context('./tests', false, /.+\.spec\.jsx?$/)
context.keys().forEach(context)
module.exports = context