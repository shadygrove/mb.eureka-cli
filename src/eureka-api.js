const http = require('http');
const log = require('./log');
const fetch = require('node-fetch');
const url = require('url');

const conf = {
    host: 'http://localhost:8765/eureka'
}

class EurekaAPI {
    apps () {
        log.info('EurekaAPI: ls');

        const path = '/apps';
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

module.exports = EurekaAPI;