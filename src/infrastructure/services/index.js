import api from './api'

const env = 'production' /* = process.NODE_ENV */

const services = {
  log: env === 'development' ? console.log() : console.log('Sending...'),
  api
}

export default services
