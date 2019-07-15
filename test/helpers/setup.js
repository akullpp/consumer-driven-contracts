import axios from 'axios'
require('dotenv').config()

export default () => {
  axios.defaults.headers.common = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }
}
