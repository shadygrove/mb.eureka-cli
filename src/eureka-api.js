const http = require('http');
const log = require('./log');
const fetch = require('node-fetch');
const url = require('url');

const conf = {
    host: 'http://localhost:8765/eureka'
}

class EurekaAPI {
    apps (options) {
        log.info('EurekaAPI: ls');

        const path = '/apps';
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
}

module.exports = EurekaAPI;