
const EurekaAPI = require('./eureka-api');

module.exports = {
    tunnel: require('./tunnel'),
    log: require('./log'),
    eureka: new EurekaAPI()
}