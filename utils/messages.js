const moment = require('moment');

function fromatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  }
}

module.exports = fromatMessage;