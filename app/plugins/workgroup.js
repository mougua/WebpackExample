module.exports = function (client, stanzas) {
  const types = stanzas.utils
  const MinChats = stanzas.define({
    name: 'minChats',
    element: 'min-chats',
    fields: {
      value: types.text()
    }
  })

  const AgentStatus = stanzas.define({
    name: 'agentStatus',
    element: 'agent-status',
    namespace: 'http://jabber.org/protocol/workgroup',
    fields: {
      maxChats: types.textSub(null, 'max-chats')
    }
  })

  stanzas.extend(AgentStatus, MinChats)

  stanzas.withPresence(function (Presence) {
    stanzas.extend(Presence, AgentStatus)
  })

  client.sendWorkgroupPresence = function (jid, maxChats) {
    client.sendPresence({
      to: jid,
      agentStatus: {
        maxChats: maxChats,
        minChats: {
          value: '11'
        }
      }
    })
  }
}
