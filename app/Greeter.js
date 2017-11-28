import config from './config.json'

module.exports = function () {
  const great = document.createElement('div')
  great.textContent = config.greetText
  return great
}
