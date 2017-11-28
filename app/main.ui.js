const $ = require('jquery')

module.exports = {
  messageAdd: function (isMe, msg) {
    if (isMe) {
      $('.dialogue .chat_area').append(`<li class="customer"><ul><li class="chat">${msg}</li><li class="name"><img src="http://serenade0936.kissr.com/Codepen/winnie.png" alt=""></li></ul></li>`)
    } else {
      $('.dialogue .chat_area').append(`<li class="service"><ul><li class="name"><img src="http://serenade0936.kissr.com/Codepen/winnie.png" alt=""></li><li class="chat">${msg}</li></ul></li>`)
    }
    $('.dialogue').scrollTop(100000)
  }
}
