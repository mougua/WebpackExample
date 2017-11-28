require('./main.css')
const ui = require('./main.ui')
const $ = require('jquery')
const XMPP = require('stanza.io')

const client = XMPP.createClient({
  jid: 'ck@localhost',
  password: 'fucking',
  transport: 'websocket',
  wsURL: 'wss://localhost:7443/ws/'
})

client.on('session:started', () => {
  client.getRoster()
  client.sendPresence()
})

client.on('chat', function (msg) {
  console.log(msg)
  if (msg.from.local !== 'ck') {
    ui.messageAdd(false, msg.body)
  }
})

$('#on').click(function () {
  client.sendPresence({
    from: client.jid,
    to: 'demo@workgroup.localhost',
    tt: 'tt',
    'agent-status': {
      'max-chats': 4
    }
  })
  // setTimeout(function () {
  //   client.sendPresence({
  //     to: 'demo@workgroup.localhost',
  //     status: '在线',
  //     priority: 1
  //   })
  //   console.log('on')
  // }, 2000)
})

client.on('raw:incoming', (xml) => {
  console.log(`[入] ${xml}`)
})

client.on('raw:outgoing', (xml) => {
  console.log(`[出] ${xml}`)
})

$('#send').click(function () {
  let fr = 'admin@localhost'
  const msgbox = $('.messages')
  const msg = msgbox.val()
  if (!msg) return
  ui.messageAdd(true, msg)
  client.sendMessage({
    type: 'chat',
    to: fr,
    body: msg
  })
  msgbox.val('')
})

client.connect()
