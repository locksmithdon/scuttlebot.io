var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-WS-Server',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-ws-server.html',
  content: md.doc(__dirname+'/pull-ws-server.md')
})