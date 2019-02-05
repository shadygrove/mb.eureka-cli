
const EurekaAPI = require('./eureka-api');

module.exports = {
    tunnel: require('./tunnel'),
    log: require('./log'),
    eureka: (settings) => {
        return new EurekaAPI(settings); 
    }
}